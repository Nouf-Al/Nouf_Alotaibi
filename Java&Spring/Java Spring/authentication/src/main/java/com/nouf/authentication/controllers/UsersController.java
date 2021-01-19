package com.nouf.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nouf.authentication.models.User;
import com.nouf.authentication.services.UserService;
import com.nouf.authentication.validator.UserValidator;

@Controller
public class UsersController {
    private final UserService userService;
    private final UserValidator userValidator;

    public UsersController(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }
   
    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    
    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userValidator.validate(user, result);
    	if(result.hasErrors()) {
    		return "registrationPage.jsp";
    	}else {
    		User newUser = userService.registerUser(user);
    		session.setAttribute("id", newUser.getId());
    		return "redirect:/home";
    	}
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, Model model, HttpSession session) {
    	if(userService.authenticateUser(email, password)) {
    		session.setAttribute("id", userService.findByEmail(email).getId());
    		return "redirect:/home"; 
    	}else {
    		model.addAttribute("error", "Invalid Credentials.");
    		return "loginPage.jsp";
    	}	
    }
    
    @RequestMapping("/home")
    public String home(HttpSession session, Model model) {
    	Long id = (Long)session.getAttribute("id");
    	User user = userService.findUserById(id);
    	model.addAttribute("user", user);
    	return "homePage.jsp"; 
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
		return "redirect:/login"; 
    }
}