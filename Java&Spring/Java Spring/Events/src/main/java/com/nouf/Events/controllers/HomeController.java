package com.nouf.Events.controllers;

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
import com.nouf.Events.models.Comment;
import com.nouf.Events.models.Event;
import com.nouf.Events.models.LoginUser;
import com.nouf.Events.models.User;
import com.nouf.Events.models.UserEvent;
import com.nouf.Events.services.EventService;
import com.nouf.Events.services.UserService;

@Controller
public class HomeController {
	private final UserService userService;
	private final EventService eventService;

	public HomeController(UserService userService, EventService eventService) {
		this.userService = userService;
		this.eventService = eventService;
	}

	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(HttpSession session, @Valid @ModelAttribute("newUser") User newUser, BindingResult result,
			Model model) {
		userService.register(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		} else {
			session.setAttribute("user_id", newUser.getId());
			return "redirect:/home";
		}
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model,
			HttpSession session) {
		User u = userService.login(newLogin, result);
		if (result.hasErrors()) {
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
	public String home(HttpSession session, Model model, @ModelAttribute("event") Event event) {
		User user = userService.findById((Long) session.getAttribute("user_id"));
		if (user == null) {
			return "redirect:/";
		}
		model.addAttribute("user", user);
		List<Event> events = eventService.findEvents(user.getState());
		model.addAttribute("events", events);
		List<Event> eventsNot = eventService.findEventsNotinSameState(user.getState());
		model.addAttribute("eventsNot", eventsNot);
		List<UserEvent> joiners = eventService.findAll();
		model.addAttribute("joiners", joiners);
		return "home.jsp";
	}

//    event

	@RequestMapping(value = "/event/create", method = RequestMethod.POST)
	public String createEvent(@Valid @ModelAttribute("event") Event event, BindingResult result) {
		if (result.hasErrors()) {
			return "home.jsp";
		} else {
			eventService.createEvent(event);
			return "redirect:/home";
		}
	}

	@RequestMapping("/event/{id}")
	public String showEvent(HttpSession session, @PathVariable(value = "id") Long id, Model model,
			@ModelAttribute("comment") Comment comment) {
		Event e = eventService.findEventById(id);
		model.addAttribute("event", e);

		List<Comment> c = eventService.findCommentByEvent(e);
		model.addAttribute("comments", c);

		User u = userService.findById((Long) session.getAttribute("user_id"));
		model.addAttribute("user", u);

		List<UserEvent> joiners = eventService.findAll();
		model.addAttribute("joiners", joiners);

		Long count = eventService.count(e);
		model.addAttribute("count", count);
		return "show.jsp";
	}

	@RequestMapping("/event/{id}/edit")
	public String edit(@PathVariable(value = "id") Long id, Model model, HttpSession session) {
		if (session.getAttribute("user_id") == null) {
			return "redirect:/home";
		}
		User user = userService.findById((Long) session.getAttribute("user_id"));
		if (eventService.findEventById(id).getUser().getId() == user.getId()) {
			model.addAttribute("event", eventService.findEventById(id));
			return "edit.jsp";
		} else {
			return "redirect:/home";
		}
	}

	@RequestMapping(value = "/event/{id}/editEvent", method = RequestMethod.POST)
	public String update(Model model, @Valid @ModelAttribute("event") Event event, BindingResult result,
			@PathVariable(value = "id") Long id) {
		if (result.hasErrors()) {
			model.addAttribute("event", eventService.findEventById(id));
			return "edit.jsp";
		} else {
			eventService.update(event);
			return "redirect:/event/" + id;
		}
	}

	@RequestMapping(value = "/event/{id}/delete")
	public String delete(@PathVariable("id") Long id) {
		eventService.delete(id);
		return "redirect:/home";
	}

//    comment
	@RequestMapping(value = "/comment/create", method = RequestMethod.POST)
	public String createComment(Model model, @Valid @ModelAttribute("comment") Comment comment, BindingResult result,
			@RequestParam(name = "eventId") Long eventId) {
		if (result.hasErrors()) {
			model.addAttribute("event", eventService.findEventById(eventId));
			return "show.jsp";
		} else {
			eventService.createComment(comment);
			return "redirect:/event/" + eventId;
		}
	}

//    userEvent
	@RequestMapping(value = "/event/{id}/join", method = RequestMethod.POST)
	public String joinEvent(@PathVariable(value = "id") Long id, HttpSession session) {
		eventService.joinEvent(eventService.findEventById(id), userService.findById((Long) session.getAttribute("user_id")));
		return "redirect:/home";

	}

	@RequestMapping(value = "event/{id}/join/delete")
	public String cancel(@PathVariable("id") Long id, HttpSession session) {
		UserEvent ue = eventService.findByEventAndUser(eventService.findEventById(id), userService.findById((Long) session.getAttribute("user_id")));
		eventService.cancel(ue);
		return "redirect:/home";
	}
}