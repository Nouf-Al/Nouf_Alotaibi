package com.nouf.dojoNinjas.services;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.nouf.dojoNinjas.models.Ninja;
import com.nouf.dojoNinjas.repositories.NinjaRepo;

@Service
public class NinjaService {
	private NinjaRepo ninjaRepo;

	public NinjaService(NinjaRepo ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}

	public Ninja create(Ninja newNinja) {
		return ninjaRepo.save(newNinja);
	}

	public List<Ninja> getAll() {
		return (List<Ninja>) ninjaRepo.findAll();
	}

	public Ninja findNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		if (optionalNinja.isPresent()) {
			return optionalNinja.get();
		} else {
			return null;
		}
	}
}
