import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSongButton(){
   let navigate = useNavigate();
   const [click, setClick]=useState(false);


   return(
      <div className="col-md-6">{
         click?navigate("/addSong"):null
      }
      <button className="btn btn-primary align" onClick={()=>setClick(true)}>+ Add Song</button>
        </div>     
     
   );
}

export default AddSongButton;