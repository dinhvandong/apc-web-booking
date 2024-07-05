package com.apc.webadmin.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private Environment env;

    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(env.getProperty("spring.mail.username"));
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

    public void sendEmailRegisterConfirmCode(String email, String fullName, String path, String code)
    {


        String subject = "Register new account from AmbassadorDayCruise ";

        String body ="Dear " + fullName+ ",\n" +
                "\n" +
                "We are thrilled to welcome you to our AmbassadorCruise Booking System! Thank you for choosing us to be your trusted platform for booking your next unforgettable adventure. We can't wait to help you create amazing memories.\n" +
                "\n" +
                "As a registered user, you now have access to a wide range of exciting travel tours, exclusive deals, and personalized recommendations tailored to your preferences. Whether you're looking for a relaxing beach getaway, an adventurous hiking expedition, or a cultural city tour, we have something for everyone."
        + "\n" +
                "Please confirm code by click link below: http://ambassadordaycruise.com/confirm-code/" + path

        + "\n" +
                "Your register code is: " + code;

        sendEmail(email, subject, body);



    }


    public void sendEmailRegisterSuccess(String email,  String fullName){


        String subject = "Register new  account successful ";

        String body ="Dear " + fullName+ ",\n" +
                "\n" +
                "We are thrilled to welcome you to our AmbassadorCruise Booking System! Thank you for choosing us to be your trusted platform for booking your next unforgettable adventure. We can't wait to help you create amazing memories.\n" +
                "\n" +
                "As a registered user, you now have access to a wide range of exciting travel tours, exclusive deals, and personalized recommendations tailored to your preferences. Whether you're looking for a relaxing beach getaway, an adventurous hiking expedition, or a cultural city tour, we have something for everyone.";


        sendEmail(email, subject, body);
    }
}