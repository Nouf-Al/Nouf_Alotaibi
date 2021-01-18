package com.nouf.DojoOverflow.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nouf.DojoOverflow.models.Answer;
import com.nouf.DojoOverflow.models.Question;
import com.nouf.DojoOverflow.models.Tag;
import com.nouf.DojoOverflow.models.TagQuestion;
import com.nouf.DojoOverflow.repositories.AnswerRepo;
import com.nouf.DojoOverflow.repositories.QuestionRepo;
import com.nouf.DojoOverflow.repositories.TagQuestionRepo;
import com.nouf.DojoOverflow.repositories.TagRepo;

@Service
public class DojoOverflowService {
	private AnswerRepo aRepo;
	private QuestionRepo qRepo;
	private TagRepo tRepo;
	private TagQuestionRepo tqRepo;
	public DojoOverflowService(AnswerRepo aRepo, QuestionRepo qRepo, TagRepo tRepo,TagQuestionRepo tqRepo) {
		this.aRepo = aRepo;
		this.qRepo = qRepo;
		this.tRepo = tRepo;
		this.tqRepo = tqRepo;
	}
	
//	Question
	public Long createQ(String q) {
		Question question = new Question(q);
		qRepo.save(question);
		return question.getId();
	}
	
	public List<Question> findQuestions() {
		return (List<Question>) qRepo.findAll();
	}
	
	public Question findQuestion(Long id) {
		return qRepo.findById(id).orElse(null);
	}
	
	
	
//	Answer
	public Answer create(Answer answer) {
		return aRepo.save(answer);
	}

	public List<Answer> findAnswers() {
		return (List<Answer>) aRepo.findAll();
	}
	
//	tag
	
	
	public Tag findTag(Long id) {
		return tRepo.findById(id).orElse(null);
	}
	
	public Long createT(String q) {
		Tag tag = new Tag(q);
		tRepo.save(tag);
		return tag.getId();
	}
	
	public Tag findBySubject(String s) {
		 return tRepo.findBySubject(s);
		 
	}
	
//	tagQ

	
	public TagQuestion createTq(Question q, Tag t) {
		TagQuestion tq = new TagQuestion(q,t);
		return tqRepo.save(tq);
	}

}
