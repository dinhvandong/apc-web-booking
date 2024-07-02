package com.apc.webadmin.controllers;

import com.apc.webadmin.models.EmailData;
import com.apc.webadmin.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailData emailData) {
        emailService.sendEmail(emailData.getTo(), emailData.getSubject(), emailData.getBody());
    }
}