package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.Booking;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService bookingService;
    @GetMapping("/findAll")
    public ResponseEntity<?> getBookings(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize) {

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.getBookingsByPage(pageNumber, pageSize),"success"));
    }
    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody Booking newBooking){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.create(newBooking),"success"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Booking updateBooking){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.update(updateBooking),"success"));
    }
}
