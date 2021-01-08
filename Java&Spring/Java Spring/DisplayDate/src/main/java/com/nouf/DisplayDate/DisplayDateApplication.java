package com.nouf.DisplayDate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
@SpringBootApplication
@Controller
public class DisplayDateApplication {

	public static void main(String[] args) {
		SpringApplication.run(DisplayDateApplication.class, args);
	}
	@RequestMapping("")
	public String index() {
		return "index.jsp";
	}
	@RequestMapping("/date")
	public String displaydate(Model model) {
		model.addAttribute("now", new Date());
			return "date.jsp";
	}
	@RequestMapping("/time")
	public String displaytime(Model model) {
		model.addAttribute("now", new Date());
		return "time.jsp";
	}

}
