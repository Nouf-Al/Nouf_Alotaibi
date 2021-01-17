package com.nouf.dojoNinjas.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.nouf.dojoNinjas.models.Dojo;
import com.nouf.dojoNinjas.repositories.DojoRepo;

@Service
public class DojoService {
private DojoRepo dojoRepo;
	
	public DojoService(DojoRepo dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	
	public Dojo create(Dojo newDojo) {
		return dojoRepo.save(newDojo);
	}
	
	public List<Dojo> getAll() {
		return (List<Dojo>) dojoRepo.findAll();
	}
	
	public Dojo findDojo(Long id) {
		return this.dojoRepo.findById(id).orElse(null);
	}
}
