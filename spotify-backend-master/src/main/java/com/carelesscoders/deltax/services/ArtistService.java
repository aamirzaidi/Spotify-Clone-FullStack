package com.carelesscoders.deltax.services;
import com.carelesscoders.deltax.models.ArtistDetails;
import com.carelesscoders.deltax.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ArtistService {

    @Autowired
    ArtistRepository artistRepository;

    public List<ArtistDetails> getAllArtists(){
        return artistRepository.findAll();
    }

    public Optional<ArtistDetails> getArtist(String artistName){
        return artistRepository.findById(artistName);
    }

    public ArtistDetails addNewArtist(ArtistDetails artistDetails){
        return artistRepository.save(artistDetails);
    }
}
