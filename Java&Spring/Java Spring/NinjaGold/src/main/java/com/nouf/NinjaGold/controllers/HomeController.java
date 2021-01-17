package com.nouf.NinjaGold.controllers;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {
	public static int gold = 0;
	public static String res = "";
    @GetMapping("/")
    public String index(Model model) {
    	model.addAttribute("gold",gold);
    	model.addAttribute("res",res);
        return "index.jsp";
    }
    
    @PostMapping("/farm")
    public String farm(Model model ) {
        int randInt = (int) (Math.random() * (20 - 10 + 1) + 10); 
        res += "<p class='text-success m-0 p-0 ml-2'>You entered a farm and earned "+randInt+" gold. ("+new Date()+")</p>";
        gold +=randInt;
        return "redirect:/";
    }
    
    @PostMapping("/cave")
    public String cave() {
        int randInt = (int) (Math.random() * (10 - 5 + 1) + 5); 
        gold +=randInt;
        res += "<p class='text-success m-0 p-0 ml-2'>You entered a cave and earned "+randInt+" gold. ("+new Date()+")</p>";
        return "redirect:/";
    }
    
    @PostMapping("/house")
    public String house() {
        int randInt = (int) (Math.random() * (5 - 2 + 1) + 2); 
        gold +=randInt;
        res += "<p class='text-success m-0 p-0 ml-2'>You entered a house and earned "+randInt+" gold. ("+new Date()+")</p>";
        return "redirect:/";
    }
    
    @PostMapping("/casino")
    public String casino() {
        int randInt = (int) (Math.random() * (50 - (-50) + 1) + (-50)); 
        if (randInt <0 ) {
            res += "<p class='text-danger m-0 p-0 ml-2'>You entered a casino and lost "+randInt+" gold. ("+new Date()+")</p>";
        }else {
            res += "<p class='text-success m-0 p-0 ml-2'>You entered a casino and earned "+randInt+" gold. ("+new Date()+")</p>";
        }
        gold +=randInt;
        return "redirect:/";
    }

}