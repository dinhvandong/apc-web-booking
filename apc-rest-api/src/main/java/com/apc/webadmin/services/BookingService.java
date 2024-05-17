package com.apc.webadmin.services;


import com.apc.webadmin.database.SequenceGeneratorService;
import com.apc.webadmin.models.Booking;
import com.apc.webadmin.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;


    public Booking create(Booking newBooking){
        Long id = sequenceGeneratorService.generateSequence(Booking.SEQUENCE_NAME);
        newBooking.setId(id);
        return bookingRepository.insert(newBooking);
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
        bookingFound.setPrice(bookingFound.getPrice());
        bookingFound.setStatus(bookingFound.getStatus());

        return bookingRepository.save(bookingFound);
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
