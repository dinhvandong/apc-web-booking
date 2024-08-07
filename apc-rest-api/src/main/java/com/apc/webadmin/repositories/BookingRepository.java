package com.apc.webadmin.repositories;

import com.apc.webadmin.models.Booking;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends MongoRepository<Booking, Long>
{

    List<Booking> findBy(Pageable pageable);

    List<Booking> findAllByEmail(String email);

    Optional<Booking> findByBookingCode(String bookingCode);

    List<Booking> findTop100ByOrderByCreatedDateDesc(Pageable pageable);

}
