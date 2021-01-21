package com.nouf.Events.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nouf.Events.models.Event;

@Repository
public interface EventRepo extends CrudRepository<Event,Long>{
	List<Event> findByStateContaining(String state);
	List<Event> findByStateNotContaining(String state);
}
