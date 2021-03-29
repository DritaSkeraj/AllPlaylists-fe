import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import "../styles/artist.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SideMenu from "../components/sideMenu";
import Player from "../components/player";
import "../styles/mainContent.css";

const ArtistPage = (props) => {
  const artistId = props.location.pathname.split("/")[2];
  const [artist, setArtist] = useState(null);
  const [top, setTop] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(async () => {
    const result = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}`
    );
    console.log("fetch artist from artist page result: ", result.data);
    setArtist(result.data);

    const top = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}/top`
    );
    console.log("top from this artist: ", top.data);
    setTop(top.data);

    const playlists = await axios.get(
        `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}/playlists`
      );
      console.log("playlists for this artist: ", playlists.data);
      setPlaylists(playlists.data);
    
    const albums = await axios.get(
      `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`
    );
    console.log("albums for this artist: ", albums.data);
    setAlbums(albums.data);
  }, []);

  return (
    <div>
    <SideMenu/>
    <div className="main-container">
      <Container>
        <Header />
        <div>
          <img src={artist?.picture_big} />
          <h1>{artist?.name}</h1>
        </div>
        <div>
          <h3>top tracks</h3>
          {top?.data?.map((res) => (
            <>
              <img src={res.album.cover} />
              <h6>res.title_short</h6>
              <p>res.artist.name</p>
              <p>
                {Math.floor(res.duration / 60)} :{" "}
                {res.duration - Math.floor(res.duration / 60) * 60}
              </p>
            </>
          ))}
        </div>
        <div>
          <h3>Top playlists:</h3>
          {playlists?.data?.slice(0.5).map((p) => (
            <>
              <img src={p?.picture_small} />
              <h6>{p?.title}</h6>
              <p>{p?.user?.name}</p>
            </>
          ))}
        </div>
        <div>
            <h3>Albums</h3>
            {
                albums?.data?.slice(0, 6).map(a => (
                    <>
                    <img src={a?.cover} />
                        <h6>{a?.title}</h6>
                    </>
                ))
            }
        </div>
      </Container>
      </div>
      <Player/>
    </div>
  );
};
{
  /*
const ArtistPage = () => {
    return (
        <div>
            <SideMenu/>
            <Player/>
            <ArtistContent/>
        </div>
    );
};*/
}

export default withRouter(ArtistPage);
