package com.nouf.HelloHuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
	
	@RequestMapping("/")
	public String hello(@RequestParam(value="firstname", required = false) String firstname, @RequestParam(value="lastname", required = false) String lastname) {
		if(firstname == null ) {
			return "<h1>Hello Human</h1><h3>Welcome to SpringBoot. </h3>";

		}
		return "<h1>Hello "+firstname+ " "+lastname+"</h1><h3>Welcome to SpringBoot. </h3>";
	}

}
