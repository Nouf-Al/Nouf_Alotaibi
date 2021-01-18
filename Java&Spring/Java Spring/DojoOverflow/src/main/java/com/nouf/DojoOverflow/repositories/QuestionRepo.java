package com.nouf.DojoOverflow.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.nouf.DojoOverflow.models.Question;
@Repository
public interface QuestionRepo extends CrudRepository<Question,Long>{

}
