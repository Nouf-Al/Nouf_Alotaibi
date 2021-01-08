package com.nouf.Routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class DojoController {
	@RequestMapping("/{title}")
	public String dojo(@PathVariable("title")String title) {
		if(title.equals("dojo")) {
			return "The dojo is awesome!";
		}
		
		else if(title.equals("burbank-dojo")) {
			return "Burbank-dojo is located in Southern California";
		}
		
		else if(title.equals("san-jose")) {
			return "San-jose is the headquarters";
		}
		else { return "not found";}
		
		
		
	}
	
	
}
