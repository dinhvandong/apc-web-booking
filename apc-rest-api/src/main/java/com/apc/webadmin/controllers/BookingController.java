package com.apc.webadmin.controllers;

import com.apc.webadmin.dto.ResponseObject;
import com.apc.webadmin.models.Booking;
import com.apc.webadmin.models.EventPlan;
import com.apc.webadmin.models.Passenger;
import com.apc.webadmin.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = {
        "http://163.44.206.118:83",
        "http://163.44.206.118:80",
        "http://163.44.206.118",
        "http://163.44.206.118:81",
        "http://localhost:3001",
        "http://localhost:3000",
        "http://150.95.113.18",
        "http://ambassadordaycruise.com/",
        "http://admin.ambassadordaycruise.com/"

})
@RestController
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
    BookingService bookingService;
    @GetMapping("/findAll")
    public ResponseEntity<?> getBookings(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize) {

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.getBookingsByPage(pageNumber, pageSize),"success"));
    }

    @GetMapping("/findByBookingCode")
    public ResponseEntity<?> getBookings(
            @RequestParam String bookingCode) {
        Booking booking = bookingService.findByBookingCode(bookingCode);
        if(booking!= null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, booking,"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"not found"));
    }


    @GetMapping("/findAllByEmail")
    public ResponseEntity<?> findAllByEmail(
            @RequestParam String email) {
        List<Booking> bookings = bookingService.findAllByEmail(email);
        if(bookings!= null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookings,"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"not found"));
    }

    @PostMapping("/insertListPassengers")
    public ResponseEntity<?> insert(@RequestParam String bookingCode,
                                    @RequestBody List<Passenger> passengerList)
    {

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.addListPassenger(bookingCode, passengerList),"success"));

    }


        @GetMapping("/findByBookingCodeAndLastName")
    public ResponseEntity<?> findByBookingCodeAndLastName(
            @RequestParam String bookingCode, @RequestParam String lastName) {
        Booking booking = bookingService.findByBookingCodeAndLastName(bookingCode, lastName);
        if(booking!= null) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, booking,"success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"not found"));
    }
    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody Booking newBooking){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.create(newBooking),"success"));
    }



    @PostMapping("/deleteById")
    public ResponseEntity<?> delete(@RequestParam Long id){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.deleteById(id),"success"));
    }

    @PostMapping("/deleteAll")
    public ResponseEntity<?> deleteAll(){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.deleteAll(),"success"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Booking updateBooking){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, bookingService.update(updateBooking),"success"));
    }
}
