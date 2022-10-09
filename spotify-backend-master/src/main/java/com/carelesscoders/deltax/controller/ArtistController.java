package com.carelesscoders.deltax.controller;
import com.carelesscoders.deltax.models.ArtistDetails;
import com.carelesscoders.deltax.services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/artists")
public class ArtistController {

    @Autowired
    ArtistService artistService;

    @GetMapping()
    public List<ArtistDetails> getAllArtists(){
        return artistService.getAllArtists();
    }

    @GetMapping(path = "/{artistName}")
    public Optional<ArtistDetails> getArtist(@PathVariable("artistName") String artistName) {
        return artistService.getArtist(artistName);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ArtistDetails addNewArtist(@RequestBody ArtistDetails artistDetails){
        return  artistService.addNewArtist(artistDetails);
    }

}
