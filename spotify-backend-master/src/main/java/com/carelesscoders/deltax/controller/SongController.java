package com.carelesscoders.deltax.controller;
import com.carelesscoders.deltax.models.SongDetails;
import com.carelesscoders.deltax.services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/songs")
public class SongController {

    @Autowired
    SongService songService;

    @GetMapping()
    public List<SongDetails> getAllSongs(){
        return  songService.getAllSongs();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public SongDetails addNewSong(@RequestBody SongDetails songDetails){
        return songService.addNewSong(songDetails);
    }
}
