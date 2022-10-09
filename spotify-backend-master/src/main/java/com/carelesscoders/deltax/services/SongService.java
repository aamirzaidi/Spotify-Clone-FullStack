package com.carelesscoders.deltax.services;
import com.carelesscoders.deltax.models.SongDetails;
import com.carelesscoders.deltax.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SongService {

    @Autowired
    SongRepository songRepository;

    public List<SongDetails> getAllSongs(){
        return songRepository.findAll();
    }

    public SongDetails addNewSong(SongDetails songDetails){
        return songRepository.save(songDetails);
    }

}
