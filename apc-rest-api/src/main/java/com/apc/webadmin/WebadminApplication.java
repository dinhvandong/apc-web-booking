package com.apc.webadmin;

import com.apc.webadmin.security.PasswordEncoder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan(basePackages = "com.apc.webadmin")
@EnableMongoRepositories(basePackages = "com.apc.webadmin.repositories")
@EnableScheduling
public class WebadminApplication {

	public static void main(String[] args) {

	String psw1=	PasswordEncoder.getInstance().encodePassword("A123456a@");
	String psw2 = 	PasswordEncoder.getInstance().encodePassword("A123456a@");
		System.out.println("psw1:"+ psw1);
		System.out.println("psw2:"+ psw2);
		SpringApplication.run(WebadminApplication.class, args);
	}

}
