package com.nouf.Events.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nouf.Events.models.Comment;
import com.nouf.Events.models.Event;

@Repository
public interface CommentRepo extends CrudRepository<Comment,Long>{
	List<Comment> findByEvent(Event event);
}