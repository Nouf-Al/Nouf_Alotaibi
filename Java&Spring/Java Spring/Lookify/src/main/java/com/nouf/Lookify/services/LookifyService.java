package com.nouf.Lookify.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.nouf.Lookify.models.Song;
import com.nouf.Lookify.repositories.LookifyRepository;

@Service
public class LookifyService {
    private final LookifyRepository lookifyRepository;
    
    public LookifyService(LookifyRepository lookifyRepository) {
        this.lookifyRepository = lookifyRepository;
    }
    public List<Song> allSongs() {
        return lookifyRepository.findAll();
    }

    public List<Song> searchArtist(String artist) {
        return lookifyRepository.findByArtistContaining(artist);
    }

    public Song createSong(Song b) {
        return lookifyRepository.save(b);
    }
    public Song findSong(Long id) {
        Optional<Song> optionalSong = lookifyRepository.findById(id);
        if(optionalSong.isPresent()) {
            return optionalSong.get();
        } else {
            return null;
        }
    }
    public Song updateSong(Long id, String name, String artist, int rating) {
        Optional<Song> songToUpdate = lookifyRepository.findById(id);
        Song b =  songToUpdate.get();
        b.setName(name);
        b.setArtist(artist);
        b.setRating(rating);
        b.setUpdatedAt(new Date());
        return lookifyRepository.save(b);
    }
    
    public Song updateSong(Song b) {
        return lookifyRepository.save(b);
    } 
    
    public void deleteSong(Long id) {
        lookifyRepository.deleteById(id);
    }

    public List<Song> getTop10(){
		return lookifyRepository.findTop10ByOrderByRatingDesc();
	}
}
