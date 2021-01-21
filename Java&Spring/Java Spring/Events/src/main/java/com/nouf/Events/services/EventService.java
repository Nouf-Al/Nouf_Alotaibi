package com.nouf.Events.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nouf.Events.models.Comment;
import com.nouf.Events.models.Event;
import com.nouf.Events.models.User;
import com.nouf.Events.models.UserEvent;
import com.nouf.Events.repositories.CommentRepo;
import com.nouf.Events.repositories.EventRepo;
import com.nouf.Events.repositories.UserEventRepo;

@Service
public class EventService {
	private CommentRepo cRepo;
	private EventRepo eRepo;
	private UserEventRepo ueRepo;

	public EventService(CommentRepo cRepo, EventRepo eRepo, UserEventRepo ueRepo) {
		this.cRepo = cRepo;
		this.eRepo = eRepo;
		this.ueRepo = ueRepo;
	}

//	Event
	public Event createEvent(Event event) {
		return eRepo.save(event);
	}

	public List<Event> findEvents(String state) {
		return (List<Event>) eRepo.findByStateContaining(state);
	}

	public List<Event> findEventsNotinSameState(String state) {
		return (List<Event>) eRepo.findByStateNotContaining(state);
	}

	public Event findEventById(Long id) {
		Optional<Event> event = eRepo.findById(id);
		if (event.isPresent()) {
			return event.get();
		} else {
			return null;
		}
	}

	public Event update(Event b) {
		return eRepo.save(b);
	}

	public void delete(Long id) {
		eRepo.deleteById(id);
	}

//	Comment
	public Comment createComment(Comment comment) {
		return cRepo.save(comment);
	}

	public List<Comment> findAllComments() {
		return (List<Comment>) cRepo.findAll();
	}

	public List<Comment> findCommentByEvent(Event e) {
		return cRepo.findByEvent(e);
	}

//	UserEvent
	public UserEvent joinEvent(Event e, User u) {
		UserEvent ue = new UserEvent(e,u);
		return ueRepo.save(ue);
	}

	public void cancel(UserEvent ue) {
		ueRepo.delete(ue);
	}
	
	public List<UserEvent> findAll() {
		return (List<UserEvent>) ueRepo.findAll();
	}
	
	public UserEvent findByEventAndUser(Event e,User u) {
		return ueRepo.findByEventAndUser(e,u);
	}
	
	public List<UserEvent> findByUser(User u) {
		return ueRepo.findByUser(u);
	}
	
	public Long count(Event e) {
		return ueRepo.countByEvent(e);
	}
}
