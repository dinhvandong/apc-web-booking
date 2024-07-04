package com.apc.webadmin;

import com.apc.webadmin.security.PasswordEncoder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@SpringBootApplication
@ComponentScan(basePackages = "com.apc.webadmin")
@EnableMongoRepositories(basePackages = "com.apc.webadmin.repositories")
@EnableScheduling
public class WebadminApplication {
	public static String extractValue(String input) {
		String pattern = "DC(\\w+)";
		Pattern regex = Pattern.compile(pattern);
		Matcher matcher = regex.matcher(input);

		if (matcher.find()) {
			return matcher.group(1);
		}

		return null; // or an appropriate default value if no match is found
	}
	public static void main(String[] args) {

		String test = "QR   DC211- Ma GD ACSP/ w4127599 NG CHUYEN:CUSTOMER 0680113711001";

	String psw1=	PasswordEncoder.getInstance().encodePassword("A123456a@");
	String psw2 = 	PasswordEncoder.getInstance().encodePassword("A123456a@");
		System.out.println("psw1:"+ psw1);
		System.out.println("psw2:"+ psw2);
		System.out.println(extractValue(test));
		SpringApplication.run(WebadminApplication.class, args);
	}

}
