package com.carelesscoders.deltax.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "songs")
public class SongDetails {
    @Id
    @Generated
    @JsonIgnore
    int id;

    String songName;
    String dateOfRelease;
    String coverImageUrl;
    int rating;
    String artistName;
}
