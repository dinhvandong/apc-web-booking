package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.Booking;
import com.apc.webadmin.models.Passenger;
import com.apc.webadmin.repositories.BookingRepository;
import com.apc.webadmin.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;


    public Booking create(Booking newBooking){
        Long id = sequenceGeneratorService.generateSequence(Booking.SEQUENCE_NAME);
        newBooking.setId(id);
        newBooking.setStatus(1);
        newBooking.setCreatedDate(DateUtils.getCurrentDate());

        //String randomKey = UUID.randomUUID().toString();
        newBooking.setBookingCode("DC-"+id);

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
        bookingFound.setPrice(updateBooking.getPrice());
        bookingFound.setStatus(bookingFound.getStatus());

        return bookingRepository.save(bookingFound);
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
