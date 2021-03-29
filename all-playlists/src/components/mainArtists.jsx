import React, { useEffect, useState } from "react";
import Artist from "./artist";
import "../styles/mainArtists.css";
import axios from 'axios';

const MainArtists = () => {

  const [artists, setArtists] = useState([{}]);
  const [artistsIds, setArtistsIds] = useState(['860', '92', '115', '705', '368', '412', '892', '416239', '415']);

  useEffect(async()=> {
    const promiseArray = artistsIds.map(async(artist, key) => {
      const result = await fetchArtist(artist);
      return{
        data: result.data
      };
    })
    const result = await Promise.all(promiseArray);
    setArtists({"data": result});
}, [])

  const fetchArtist = async(id) => {
    return await axios.get(`https://cors-anywhere-ds.herokuapp.com/http://api.deezer.com/artist/${id}`);
  }

  return (
    <div className="artists-container">
    <div className="first-row">
      <h5>Top artists:</h5>
      <p>See all</p>
      </div>
      <div className="artists-row">
      {console.log("artists: ", artists.data)}
        {
           artists?.data?.map((artist, key) => 
            <Artist data={artist.data} />
          )
        }
        
      </div>
    </div>
  );
};

export default MainArtists;
