package com.nouf.Languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.nouf.Languages.models.Language;
import com.nouf.Languages.services.LanguageService;

@Controller
public class LanguageController {
	private final LanguageService languageService;
    
    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }
	
	@RequestMapping("/languages")
	public String all(Model model, @ModelAttribute("newLanguage") Language newLanguage) {
		List<Language> language = languageService.allLanguages();
		model.addAttribute("languages",language);
		return "all.jsp";
	}
	
	@RequestMapping(value="/languages", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("newLanguage") Language newLanguage, BindingResult result) {
        if (result.hasErrors()) {
            return "all.jsp";
        } else {
			languageService.createLanguage(newLanguage);
			return "redirect:/languages";
        }
    }
	
	@RequestMapping("/languages/{id}")
	public String show(@PathVariable(value="id")Long id,Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("language",language);
		return "show.jsp";
	}
	
	@RequestMapping(value="/languages/{id}/delete")
    public String destroy(@PathVariable("id") Long id) {
		languageService.deleteLanguage(id);
        return "redirect:/languages";
    }
	
	@RequestMapping("/languages/{id}/edit")
	public String edit(@PathVariable(value="id")Long id,Model model) {
		Language language = languageService.findLanguage(id);
		model.addAttribute("language",language);
		return "edit.jsp";
	}
	
    @RequestMapping(value="/languages/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("language") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
        	languageService.updateLanguage(language);
            return "redirect:/languages";
        }
    }
	
}
