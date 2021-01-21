package com.nouf.Events.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nouf.Events.models.Event;
import com.nouf.Events.models.User;
import com.nouf.Events.models.UserEvent;

@Repository
public interface UserEventRepo extends CrudRepository<UserEvent,Long>{
	UserEvent findByEventAndUser(Event e,User u);
	List<UserEvent> findByUser(User u);
    Long countByEvent(Event e);
}