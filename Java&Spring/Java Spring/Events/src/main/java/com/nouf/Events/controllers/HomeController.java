package com.nouf.Events.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nouf.Events.models.LoginUser;
import com.nouf.Events.models.User;
import com.nouf.Events.services.UserService;

@Controller
public class HomeController {
	private final UserService userService;
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/")
    public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
    
    @RequestMapping(value="/register",method=RequestMethod.POST)
    public String register(HttpSession session, @Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model) {
    	userService.register(newUser, result);
    	if(result.hasErrors()) {
    		model.addAttribute("newLogin", new LoginUser());
    		return "index.jsp";
    	}else {
    		session.setAttribute("user_id", newUser.getId());
        	return "redirect:/home";
    	}
    }
    
    @RequestMapping(value="/login",method=RequestMethod.POST)
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
			BindingResult result, Model model, HttpSession session) {
		User u = userService.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("user_id", u.getId());
		return "redirect:/home";
	}
    
    @RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user_id");
		return "redirect:/";
	}
	
    @RequestMapping("/home")
	public String home(HttpSession session, Model model) {
		// if we're logged in we get back a user
    	User loggedInUser = userService.findById((Long) session.getAttribute("user_id"));
		if(loggedInUser == null) {
			// if the user is null return them to the login form
			return "redirect:/";
		}
		model.addAttribute("user", loggedInUser);
		return "home.jsp";
	}
}