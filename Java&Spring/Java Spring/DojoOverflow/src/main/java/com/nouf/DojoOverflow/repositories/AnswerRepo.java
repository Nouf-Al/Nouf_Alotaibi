package com.nouf.DojoOverflow.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nouf.DojoOverflow.models.Answer;
@Repository
public interface AnswerRepo extends CrudRepository<Answer,Long> {

}
