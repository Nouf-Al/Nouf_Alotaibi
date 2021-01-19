package com.nouf.DojoOverflow.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nouf.DojoOverflow.models.Answer;
import com.nouf.DojoOverflow.models.Question;
import com.nouf.DojoOverflow.models.Tag;
import com.nouf.DojoOverflow.services.DojoOverflowService;
import java.util.regex.*;

@Controller
public class HomeController {
	public static int count=0;
	private DojoOverflowService ser;
	public HomeController(DojoOverflowService ser) {
		this.ser = ser;
	}
	
//	pages
	@RequestMapping("/questions")
	public String allQuestions(Model model,HttpSession session) {
		List<Question> Qs = ser.findQuestions();
		model.addAttribute("questions", Qs);
		session.invalidate();
		return "allQ.jsp";
	}
	
	@RequestMapping("/questions/new")
	public String newQuestion() {
		return "new.jsp";
	}
	
	@RequestMapping("/questions/{id}")
	public String viewQuestion(@PathVariable("id")Long id,Model model,@ModelAttribute("answer") Answer answer) {
		model.addAttribute("question", ser.findQuestion(id));
		return "view.jsp";
	}
	
//	functionality
	
	@RequestMapping(value="/questions/create", method=RequestMethod.POST)
	public String newQuestion(HttpSession session, @RequestParam(name="tagsSubjct")String tagsSubjct,@RequestParam(name="questionText")String questionText) {
			String [] tags = tagsSubjct.split("\\s*,\\s*");
//			String regex = "(?=.*[A-Z])";
//			Pattern p = Pattern.compile(regex);			 
			if(tags.length>3 || tags.length==0 || questionText.length()==0) {
				if(questionText.length()==0) {
					session.setAttribute("QestionTextLengthError", "Question field is rquired.");
				}
				if(tags.length>3 || tags.length>=0) {
					session.setAttribute("tagsLengthError", "Tags must be lowercase, seprated by comma and max tags should be less than 4.");
				}
				return "new.jsp";
			}else {
				session.invalidate();
				Long q1 = ser.createQ(questionText);
				Question qObj = ser.findQuestion(q1);
				for(int i=0; i<tags.length;i++) {
//					Matcher m = p.matcher(tags[i]);
//					if (m.matches()) {
//						session.setAttribute("tagsRegexError", "Tags must be lowercase.");
//						return "new.jsp"; 
//					}
			        String tag = tags[i].toLowerCase();  
					Tag find = ser.findBySubject(tag);
					if(find == null) {
						Long t = ser.createT(tag);
						Tag tObj = ser.findTag(t);
						ser.createTq(qObj, tObj);

					}else {
						Tag tObj = ser.findTag(find.getId());
						ser.createTq(qObj, tObj);
					}
				}
				return "redirect:/questions";
			}
    		
    	
	}
	

	@RequestMapping(value="/answers/create", method=RequestMethod.POST)
	public String newAnswer(HttpSession session,@Valid @ModelAttribute("answer") Answer answer, BindingResult result, @RequestParam(name="questionId")Long questionId) {
		if(result.hasErrors()) {
			session.setAttribute("error", "Answer field is required.");			
			return "redirect:/questions/"+questionId;
    	}else {
    		session.invalidate();
    		Answer a = ser.create(answer);
    		return "redirect:/questions/"+a.getQuestion().getId();
    	}
	}
	
	
}
