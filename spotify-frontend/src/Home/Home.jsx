import React from "react";
import AddSongButton from "./AddSongButton";
import HomeHeading from "./HomeHeading";
import TopArtists from "./TopArtists";
import TopSongs from "./TopSongs";

function Home() {
  return (

    <div className="row left-space up-space down-space">
      <HomeHeading title={"Top 10 Songs"}/>
      <AddSongButton />
      <TopSongs />
      <div className="up-space">
      <HomeHeading title={"Top 10 Artists"}/>  
      </div>    
      <TopArtists/>
    </div>
  );
}

export default Home;