package com.nouf.Counter.controllers;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	private int getSessionCount(HttpSession sesh) {
		Object seshVal = sesh.getAttribute("count");
		if(seshVal == null) {
			setSessionCount(sesh, 0);
			seshVal = sesh.getAttribute("count");
		}
		return (Integer)seshVal;
	}
	
	private void setSessionCount(HttpSession sesh, int val) {
		sesh.setAttribute("count", val);
	}
	
	@RequestMapping("/")
	public String Index(HttpSession s) {
		int currCount = getSessionCount(s);
		setSessionCount(s, ++currCount);
		return "index.jsp";
	}
		
	@RequestMapping("/counter")
	public String Counter(HttpSession s, Model model) {
		model.addAttribute("count", getSessionCount(s));
		return "counter.jsp";
		
	}
	
	@RequestMapping("/reset")
	public String reset(HttpSession s) {
		setSessionCount(s, 0);
		return "counter.jsp";
		
	}
	
	@RequestMapping("/increment")
	public String increment(HttpSession s) {
		int currentCount = getSessionCount(s);
		setSessionCount(s, currentCount+=2);
		return "index.jsp";
		
	}
}