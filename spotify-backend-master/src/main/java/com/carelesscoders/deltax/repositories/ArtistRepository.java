package com.carelesscoders.deltax.repositories;
import com.carelesscoders.deltax.models.ArtistDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<ArtistDetails, String> {
}
