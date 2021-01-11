package com.nouf.DojoSurvey.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index.jsp";
    }
    
    @PostMapping("/survey")
    public String survey(Model model,@RequestParam (value="name") String name, @RequestParam (value="location") String location, @RequestParam (value="language") String language, @RequestParam (value="comment") String comment) {
    	if(language.equals("Java")) {
    		return "redirect:/java";
    	}else {
    		model.addAttribute("name",name);
        	model.addAttribute("location",location);
        	model.addAttribute("language",language);
        	model.addAttribute("comment",comment);
        	return "/result.jsp";
    	}
    }
    
    @GetMapping("/java")
    public String java() {
        return "java.jsp";
    }

}