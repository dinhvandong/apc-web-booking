package com.apc.webadmin.services;

import com.apc.webadmin.model_api.BookingDetails;
import com.apc.webadmin.models.Booking;
import com.apc.webadmin.utils.DateUtils;
import com.apc.webadmin.utils.EnCodeMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class PmsBookingService {

    private final WebClient webClient;


    @Autowired
    public PmsBookingService() {
        this.webClient = WebClient.create("https://apc.skysoft.vn/apc2022/api2/3.appBooking.php ?pass=");;
    }


//    public void postData(WebClient webClient) {
//        Booking booking = new Booking("John Doe", "2024-07-24", "New York");
//
//        webClient.post()
//                .uri("/bookings")
//                .body(BodyInserters.fromValue(booking))
//                .retrieve()
//                .bodyToMono(String.class)
//                .subscribe(response -> System.out.println("Response: " + response));
//    }
    public void requestBooking(Booking booking){

        String bookCode = booking.getBookingCode();
        Long bookingDate = booking.getBookingDate();
        String bookingDateString = DateUtils.formatDate(bookingDate);
        String md5Code = EnCodeMD5.getMD5Hash(bookCode + "-" + bookingDateString);
        //String urlRequest = "https://apc.skysoft.vn/apc2022/api2/3.appBooking.php ?pass=" + md5Code;
        // Call request HTTP
        BookingDetails bookingDetails = new BookingDetails();
        bookingDetails.setCode(bookCode);
        bookingDetails.setCheckin(bookingDateString);
        bookingDetails.setCheckout(bookingDateString);
        bookingDetails.setFullname(booking.getFirstName() + booking.getLastName());
        bookingDetails.setEmail(booking.getEmail());
        bookingDetails.setPhonenumber(booking.getPhone());
        bookingDetails.setCruiseID(10);
        bookingDetails.setTotalprice(booking.getPrice());
        bookingDetails.setPaymentmethod("MB Bank Transfer");


        assert md5Code != null;
        webClient.post()
                .uri(md5Code)
                .body(BodyInserters.fromValue(bookingDetails))
                .retrieve()
                .bodyToMono(String.class)
                .subscribe(response -> System.out.println("ResponsePMS: " + response));


    }
}
