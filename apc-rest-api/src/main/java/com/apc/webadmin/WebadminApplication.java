package com.apc.webadmin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.apc.webadmin")
@EnableMongoRepositories(basePackages = "com.apc.webadmin.repositories")

public class WebadminApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebadminApplication.class, args);
	}

}
