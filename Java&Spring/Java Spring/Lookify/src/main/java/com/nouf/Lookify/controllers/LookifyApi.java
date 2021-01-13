package com.nouf.Lookify.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.nouf.Lookify.models.Song;
import com.nouf.Lookify.services.LookifyService;

@RestController
public class LookifyApi {
    private final LookifyService lookifyService;
    public LookifyApi(LookifyService lookifyService){
        this.lookifyService = lookifyService;
    }
    @RequestMapping("/api/songs")
    public List<Song> index() {
        return lookifyService.allSongs();
    }
    
    @RequestMapping(value="/api/songs", method=RequestMethod.POST)
    public Song create(@RequestParam(value="name") String name, @RequestParam(value="artist") String artist, @RequestParam(value="rating") int rating) {
        Song song = new Song(name, artist, rating);
        return lookifyService.createSong(song);
    }
    
    @RequestMapping("/api/songs/{id}")
    public Song show(@PathVariable("id") Long id) {
        Song song = lookifyService.findSong(id);
        return song;
	}
	
	@RequestMapping(value="/api/songs/{id}", method=RequestMethod.PUT)
    public Song update(@PathVariable("id") Long id, @RequestParam(value="name") String name, @RequestParam(value="artist") String artist, @RequestParam(value="rating") int rating) {
		Song song = lookifyService.updateSong(id, name, artist, rating);
		return song;
    }
    
    @RequestMapping(value="/api/songs/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
		lookifyService.deleteSong(id);
    }
}
