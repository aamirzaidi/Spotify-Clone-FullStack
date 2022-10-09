package com.carelesscoders.deltax.models;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "artists")
public class ArtistDetails {
    @Id
    @Generated
    String artistName;
    String dob;
    String bio;
}
