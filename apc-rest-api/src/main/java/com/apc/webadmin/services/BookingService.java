package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.Booking;
import com.apc.webadmin.models.Passenger;
import com.apc.webadmin.models.RoomBooking;
import com.apc.webadmin.models.TransactionSePay;
import com.apc.webadmin.repositories.BookingRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookingService {
//    @Autowired
//    BookingRepository bookingRepository;
//    @Autowired
//    SequenceGeneratorService sequenceGeneratorService;
//
//
    @Autowired
    TransactionSepayService transactionSepayService;

    private final BookingRepository bookingRepository;
    private final SequenceGeneratorService sequenceGeneratorService;
//    private final TransactionSepayService transactionSepayService;

    @Autowired
    public BookingService(
            BookingRepository bookingRepository,
            SequenceGeneratorService sequenceGeneratorService,
            TransactionSepayService transactionSepayService
    ) {
        this.bookingRepository = bookingRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
        this.transactionSepayService = transactionSepayService;
    }
    public Booking create(Booking newBooking){
        Long id = sequenceGeneratorService.generateSequence(Booking.SEQUENCE_NAME);
        newBooking.setId(id);
        newBooking.setStatus(1);
        newBooking.setCreatedDate(DateUtils.getCurrentDate());

        int adult = newBooking.getAdult();
        int children = newBooking.getChildren();
        int infant = newBooking.getInfant();

        double priceGuest = newBooking.getPrice() * (adult + 0.7 * children + ((infant > 1) ? (infant-1)*0.7f:0));


        List<RoomBooking> roomBookingList = newBooking.getRoomBookingList();
        double priceRoom = 0;
        for(RoomBooking item: roomBookingList){
            priceRoom += item.getPrice()* item.getCount();
        }

        newBooking.setPrice(priceGuest + priceRoom);

        //String randomKey = UUID.randomUUID().toString();
        newBooking.setBookingCode("DC"+id);

        return bookingRepository.insert(newBooking);
    }


    public boolean deleteAll(){
        bookingRepository.deleteAll();
        return true;
    }

    public boolean deleteById(Long id){
        bookingRepository.deleteById(id);
        return true;
    }
    public Booking update(Booking updateBooking){
        Optional<Booking> optional= bookingRepository.findById(updateBooking.getId());
        if(optional.isEmpty()){
            return  null;
        }

        Booking bookingFound = optional.get();
        bookingFound.setCruiseType(updateBooking.getCruiseType());
        bookingFound.setEmail(updateBooking.getEmail());
        bookingFound.setPhone(updateBooking.getPhone());
        bookingFound.setLastName(bookingFound.getLastName());
        bookingFound.setFirstName(bookingFound.getFirstName());
       // bookingFound.setPrice(updateBooking.getPrice());
        bookingFound.setStatus(bookingFound.getStatus());

        int adult = bookingFound.getAdult();
        int children = bookingFound.getChildren();
        int infant = bookingFound.getInfant();

        double priceGuest = bookingFound.getPriceBase() * (adult + 0.7 * children + ((infant > 1) ? (infant-1)*0.7f:0));


        List<RoomBooking> roomBookingList = bookingFound.getRoomBookingList();
        double priceRoom = 0;
        for(RoomBooking item: roomBookingList){
            priceRoom += item.getPrice()* item.getCount();
        }

        bookingFound.setPrice(priceGuest + priceRoom);

        return bookingRepository.save(bookingFound);
    }

    @Scheduled(fixedRate = 20000) // Execute every minute (60000 milliseconds)
    public void updateStatus(){
        System.out.println("Scan Booking:");
        List<Booking> bookingList = findAll();
        for(Booking item: bookingList){
            if(item.getStatus()== Booking.BOOKING_PENDING){
                List<TransactionSePay> sePayList = new ArrayList<>();
                sePayList = transactionSepayService.findAll();
                        //transactionSepayService.getTransactionsByContent(item.getBookingCode());
                for (TransactionSePay sePay: sePayList){
                    System.out.println("Scan TransactionSePay:" + sePay.getTransaction_content());

                    if(sePay.getTransaction_content().equals(item.getBookingCode())){
                        double amountIn = Double.parseDouble(sePay.getAmount_in());
                        if(amountIn >= (item.getPrice())){
                            item.setStatus(Booking.BOOKING_DONE);
                            bookingRepository.save(item);
                            break;
                        }
                    }

                }
            }
        }
    }

    public List<Booking> getLast100Bookings() {
        Pageable pageable = PageRequest.of(0, 100, Sort.by(Sort.Direction.DESC, "createdDate"));
        return bookingRepository.findTop100ByOrderByCreatedDateDesc(pageable);
    }

    public Booking addListPassenger(String bookingCode, List<Passenger> passengerList){

        Optional<Booking> optional= bookingRepository.findByBookingCode(bookingCode);
        if(optional.isEmpty()){
            return  null;
        }

        Booking bookingFound = optional.get();

        List<Passenger> passengers = bookingFound.getPassengerList();

        for(Passenger p: passengerList)
        {
            Long idPassenger = sequenceGeneratorService.generateSequence(Passenger.SEQUENCE_NAME);
            p.setId(idPassenger);
            passengers.add(p);
        }

        bookingFound.setPassengerList(passengers);


        int adult = bookingFound.getAdult();
        int children = bookingFound.getChildren();
        int infant = bookingFound.getInfant();

        double priceGuest = bookingFound.getPriceBase() * (adult + 0.7 * children + ((infant > 1) ? (infant-1)*0.7f:0));


        List<RoomBooking> roomBookingList = bookingFound.getRoomBookingList();
        double priceRoom = 0;
        for(RoomBooking item: roomBookingList){
            priceRoom += item.getPrice()* item.getCount();
        }

        bookingFound.setPrice(priceGuest + priceRoom);
        return bookingRepository.save(bookingFound);
    }


    public Booking addRoomBooking(String bookingCode, List<RoomBooking> roomBookings){

        Optional<Booking> optional= bookingRepository.findByBookingCode(bookingCode);
        if(optional.isEmpty()){
            return  null;
        }

        Booking bookingFound = optional.get();

        List<RoomBooking> roomBookingList = bookingFound.getRoomBookingList();

        roomBookingList.addAll(roomBookings);

        bookingFound.setRoomBookingList(roomBookingList);

        int adult = bookingFound.getAdult();
        int children = bookingFound.getChildren();
        int infant = bookingFound.getInfant();

        double priceGuest = bookingFound.getPriceBase() * (adult + 0.7 * children + ((infant > 1) ? (infant-1)*0.7f:0));
        List<RoomBooking> roomList = bookingFound.getRoomBookingList();
        double priceRoom = 0;
        for(RoomBooking item: roomList){
            priceRoom += item.getPrice()* item.getCount();
        }
        bookingFound.setPrice(priceGuest + priceRoom);
        return bookingRepository.save(bookingFound);
    }

    public Booking findByBookingCode(String bookingCode){

        Optional<Booking> optional = bookingRepository.findByBookingCode(bookingCode);
        if(optional.isEmpty()) {
            return  null;
        }
        return optional.get();
    }


    public List<Booking> findAllByEmail(String email){

        return bookingRepository.findAllByEmail(email);
    }

    public Booking findByBookingCodeAndLastName(String bookingCode, String lastName){

        Optional<Booking> optional = bookingRepository.findByBookingCode(bookingCode);
        if(optional.isEmpty()) {
            return  null;
        }
        Booking booking =  optional.get();

        if(booking.getLastName().equalsIgnoreCase(lastName.toLowerCase())){
            return booking;
        }
        return  null;
    }
    public List<Booking> findAll(){
        return bookingRepository.findAll();
    }

    public List<Booking> getBookingsByPage(int pageNumber, int pageSize) {
        Sort sort = Sort.by("createdDate").descending();
        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        return bookingRepository.findBy(pageable);
    }
}
