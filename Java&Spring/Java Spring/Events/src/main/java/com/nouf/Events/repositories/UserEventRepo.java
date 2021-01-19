package com.nouf.Events.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nouf.Events.models.UserEvent;

@Repository
public interface UserEventRepo extends CrudRepository<UserEvent,Long>{

}