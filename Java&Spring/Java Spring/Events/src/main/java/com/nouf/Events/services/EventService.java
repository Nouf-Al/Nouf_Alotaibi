package com.nouf.Events.services;

import com.nouf.Events.repositories.CommentRepo;
import com.nouf.Events.repositories.EventRepo;
import com.nouf.Events.repositories.UserEventRepo;

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

//	Comment
		
//	UserEvent

	
}
