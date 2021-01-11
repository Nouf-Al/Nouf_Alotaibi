package com.nouf.TheCode.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index.jsp";
    }
    
    @PostMapping("/check")
    public String check(@RequestParam(value="code") String code) {
    	if(code.equals("bushido")) {
    		return "redirect:/code";
    	}else {
    		return "redirect:/createError";
    	}
        
    }
    
    @GetMapping("/code")
    public String secret() {
        return "secret.jsp";
    }
    
    @RequestMapping("/createError")
    public String flashMessages(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("error", "You must train harder");
        return "redirect:/";
    }

}