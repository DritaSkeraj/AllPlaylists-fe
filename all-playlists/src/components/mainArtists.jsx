import React, { useEffect, useState } from "react";
import Artist from "./artist";
import "../styles/mainArtists.css";
import axios from 'axios';
import {Link} from "react-router-dom";

const MainArtists = () => {

  const [artists, setArtists] = useState([{}]);
  const [artistsIds, setArtistsIds] = useState(['860', '92', '115', '705', '368', '412', '892', '416239', '415']);

  useEffect(async()=> {
    const result = await fetchArtist();
    setArtists({"data": result})
}, [])

  const fetchArtist = async() => {
    return await axios.get(`https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/chart`);
  }

  return (
    <div className="artists-container">
    <div className="first-row">
      <h5>Top artists:</h5>
      <p>See all</p>
      </div>
      <div className="artists-row">
      {console.log("artists: ", artists?.data?.data?.artists?.data?.slice(0,9))
    }
        {
           artists?.data?.data?.artists?.data?.slice(0,9).map((artist, key) => 
            <Link to={`/artist/${artist.id}`}><Artist data={artist} /></Link>
          )
        }
        
      </div>
    </div>
  );
};

export default MainArtists;
