package com.nouf.Lookify.controllers;

import java.util.List;
import javax.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.nouf.Lookify.models.Song;
import com.nouf.Lookify.services.LookifyService;

@Controller
public class LookifyController {
	private final LookifyService lookifyService;
    public LookifyController(LookifyService lookifyService){
        this.lookifyService = lookifyService;
    }

    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }

	@RequestMapping("/dashboard")
    public String dashboard(Model model) {
        List<Song> songs = lookifyService.allSongs();
        model.addAttribute("songs", songs);
        return "dashboard.jsp";
    }
	
	@RequestMapping("/songs/{id}/delete")
    public String destroy(@PathVariable("id") Long id) {
        lookifyService.deleteSong(id);
        return "redirect:/dashboard";
    }

    @RequestMapping("/songs/new")
    public String newSong(@ModelAttribute("Song") Song newSong) {
        return "new.jsp";
    }
    
//    @RequestMapping(value="/songs/new", method=RequestMethod.POST)
//    public String create(@RequestParam(value="name") String name, @RequestParam(value="artist") String artist, @RequestParam(value="rating") int rating) {
//        Song song = new Song(name, artist, rating);
//        lookifyService.createSong(song);
//        return "redirect:/dashboard";
//    }

    @RequestMapping(value="/songs/new", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("Song") Song newSong, BindingResult result) {
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
		lookifyService.createSong(newSong);
		return "redirect:/dashboard";
        }
    }


    @RequestMapping("/songs/{id}")
    public String show(Model model, @PathVariable(value="id") Long id) {
        Song song = lookifyService.findSong(id);
        model.addAttribute("song", song);
        return "show.jsp";
    }

    @RequestMapping(value="/search", method=RequestMethod.POST)
    public String search(Model model, @RequestParam(value="artist")String artist) {
        boolean isEmpty = false;
        boolean noResults = false;

        if(artist.equals("")){
            isEmpty = true;
            model.addAttribute("isEmpty", isEmpty);
            return "searchResults.jsp";
        } else {
            List<Song> songs = lookifyService.searchArtist(artist);
            if(songs.size()==0){
                noResults = true;
                model.addAttribute("noResults", noResults);
            }else{
                model.addAttribute("results", songs);
            }
            model.addAttribute("searchQ", artist);
            return "searchResults.jsp";
        }
    }

    @RequestMapping("/songs/top10")
	public String topten(Model model) {
		List<Song> songs = lookifyService.getTop10();
		model.addAttribute("songs", songs);
		return "top10.jsp";
	}
}
