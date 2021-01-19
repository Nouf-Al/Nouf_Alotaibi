package com.nouf.Events.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nouf.Events.models.Event;

@Repository
public interface EventRepo extends CrudRepository<Event,Long>{

}
