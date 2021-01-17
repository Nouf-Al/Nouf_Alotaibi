package com.nouf.dojoNinjas.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nouf.dojoNinjas.models.Dojo;
import com.nouf.dojoNinjas.models.Ninja;
import com.nouf.dojoNinjas.services.DojoService;
import com.nouf.dojoNinjas.services.NinjaService;

@Controller
public class HomeController {
	private DojoService dojoSer;
	private NinjaService ninjaSer;

	public HomeController(DojoService dojoSer,NinjaService ninjaSer) {
		this.dojoSer=dojoSer;
		this.ninjaSer=ninjaSer;
	}
	@RequestMapping("/dojos/new")
	public String newDojo() {
		return "newDojo.jsp";
	}
	
	@RequestMapping("/ninjas/new")
	public String newNinja(Model model) {
		List<Dojo> dojos = dojoSer.getAll();
		model.addAttribute("dojos",dojos);
		return "newNinja.jsp";
	}
	
	@RequestMapping(value="/dojos/create", method=RequestMethod.POST)
	public String createDojo(@ModelAttribute("dojo") Dojo dojo) {
		dojoSer.create(dojo);
		return "redirect:/dojos/new";
	}
	
	@RequestMapping(value="/ninjas/create", method=RequestMethod.POST)
	public String createNinja(@ModelAttribute("ninja") Ninja ninja) {
		ninjaSer.create(ninja);
		return "redirect:/ninjas/new";
	}
	
//	@RequestMapping("/dojos/{id}")
//	public String view(@PathVariable(value="id")Long id, Model model) {
//		Ninja n1 = ninjaSer.findNinja(id);
//		model.addAttribute("ninja",n1);
//		return "view.jsp";
//	}
	
	@RequestMapping("/dojos/{id}")
	public String Show(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dojoSer.findDojo(id));
		return "view.jsp";
	}
}
