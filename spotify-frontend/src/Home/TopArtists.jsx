import React,{useState,useEffect} from "react";
import ArtistComponent from "./artistComponent";
import LoadingIndicator from "./loadingIndicator";
import Axios from "axios";

function TopArtists() {

    const [listArtists, setlistArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    
    async function getAllArtists() {
        setLoading(true);

        Axios.get("http://localhost:8080/artists")
            .then((response)=>{setlistArtists(response.data)});

        setLoading(false);
    }

    useEffect(() => {
        getAllArtists();
    }, []);

    function displayAllArtists(listSongs) {
        const listArtistComponent = [];
        listSongs.forEach((song) => {
            listArtistComponent.push(
                <ArtistComponent 
                    artistName={song.artistName}
                    dob={song.dob}
                    bio={song.bio}
                />
            );
        });
        return listArtistComponent;
    }

    if (loading) {
        return (<LoadingIndicator />)
    }

    return (
        <div className="row left-space right-space up-space">
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"><center>Artists</center></th>
                        <th scope="col"><center>Date of Birth</center></th>
                        <th scope="col"><center>Bio</center></th>
                </tr>
                </thead>
                <tbody>
                {displayAllArtists(listArtists)}
                   </tbody>
            </table>
        </div>



    );
}

export default TopArtists;