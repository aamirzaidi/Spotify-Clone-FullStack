package com.carelesscoders.deltax.repositories;
import com.carelesscoders.deltax.models.SongDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<SongDetails, Integer> {
}
