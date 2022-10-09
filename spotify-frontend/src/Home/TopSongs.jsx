import React,{useState,useEffect} from "react";
import SongComponent from "./songComponent";
import LoadingIndicator from "./loadingIndicator";
import Axios from "axios";

function TopSongs() {
    
    const [listSongs, setlistSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    async function getAllSongs() {
        setLoading(true);

        Axios.get("http://localhost:8080/songs")
            .then((response)=>{setlistSongs(response.data)});

        setLoading(false);
    }

    useEffect(() => {
        getAllSongs();
    }, []);

    function displayAllSongs(listSongs) {
        const listSongComponent = [];
        listSongs.forEach((song) => {
            listSongComponent.push(
                <SongComponent 
                    coverImageUrl={song.coverImageUrl}
                    songName={song.songName}
                    dateOfRelease={song.dateOfRelease}
                    artistName={song.artistName}
                    rating={song.rating}
                />
            );
        });
        return listSongComponent;
    }

    if (loading) {
        return (<LoadingIndicator />)
    }

    return(
        <div className="row left-space right-space up-space">
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"><center>Artwork</center></th>
                        <th scope="col"><center>Song</center></th>
                        <th scope="col"><center>Date Of Release</center></th>
                        <th scope="col"><center>Artists</center></th>
                        <th scope="col"><center>Rate</center></th>
                    </tr>
                </thead>
                <tbody>
                    {displayAllSongs(listSongs)}
                </tbody>

            </table>
        </div>
    );
}

export default TopSongs;