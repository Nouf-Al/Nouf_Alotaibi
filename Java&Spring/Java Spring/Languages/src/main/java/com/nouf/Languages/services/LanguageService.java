package com.nouf.Languages.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.nouf.Languages.models.Language;
import com.nouf.Languages.repositories.LanguageRepository;

@Service
public class LanguageService {
    private final LanguageRepository languageRepository;
    
    public LanguageService(LanguageRepository languageRepository) {
    	this.languageRepository = languageRepository;
    }
    
    public List<Language> allLanguages() {
        return languageRepository.findAll();
    }
    
    public Language createLanguage(Language b) {
        return languageRepository.save(b);
    }
    
    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if(optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        } else {
            return null;
        }
    }
    
    public Language updateLanguage(Long id, String name, String creator, double currentVersion) {
    	Optional<Language> languageToUpdate = languageRepository.findById(id);
    	Language b =  languageToUpdate.get();
    	b.setName(name);
    	b.setCreator(creator);
    	b.setCurrentVersion(currentVersion);
    	b.setUpdatedAt(new Date());
    	return languageRepository.save(b);
    }
    
    // edits a book
    public Language updateLanguage(Language b) {
    	return languageRepository.save(b);
    } 
    
    public void deleteLanguage(Long id) {
    	languageRepository.deleteById(id);
    }
}
