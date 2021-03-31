import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import {Container, Row, Col} from "react-bootstrap";
import "../styles/mainContent.css";
import "../styles/playlistPage.css";

import Player from "../components/player";
import SideMenu from "../components/sideMenu";
import Header from "../components/header";

const PlaylistPage = (props) => {

  const [playlist, setPlaylist] = useState(null);
  const [playlistToDisplay, setPlaylistToDisplay] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const playlistId = props.location.pathname.split("/")[2].split("~")[0];
  const platform = props.location.pathname.split("~")[1];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    fetchPlaylist(platform);
  }, [props.location.pathname]);

  useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem("currentUser")))
  },[])

  const fetchPlaylist = async (playlistPlatform) => {
    if (playlistPlatform === "spotify") {
      let res = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.spotifyAccount.at}`,
          },
        }
      );
      console.log("spotify fetch response: ", res.data);
      setPlaylist(res.data);
      let playlist = currentUser.spotifyAccount.sPlaylists.find(p => p.id === playlistId)
      setPlaylistToDisplay({
        "id": playlistId,
        "img": res.data.items[0].track.album.images[0].url,
        "name": playlist.name,
        "author": playlist.owner.display_name,
        "items": [...res.data.items]
    })
    } else if (playlistPlatform === "youtube") {
      let res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${playlistId}&key=${process.env.GOOGLE_SECRET}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.googleAccount.at}`,
          },
        }
      );
      console.log("youtube fetch response: ", res.data);
      setPlaylist(res.data);
      let playlist = user?.googleAccount?.ytPlaylists.items.find(p => p.id === playlistId)
      setPlaylistToDisplay({
        "id": playlistId,
        "img": playlist.snippet.thumbnails.standard.url,
        //"img": res.data.items[0].snippet.thumbnails.maxres.url,
         "name": playlist.snippet.title,
         "author": playlist.snippet.channelTitle,
        "items": [...res.data.items]
    })
    } else if (playlistPlatform === "deezer") {
      let res = await axios.get(
        `https://cors-anywhere-ds.herokuapp.com/https://api.deezer.com/playlist/${playlistId}`
      );
      console.log("deezer: ", res.data)
      setPlaylist(res.data);
      setPlaylistToDisplay({
          "id": res.data.id,
          "img": res.data.picture_big,
          "name": res.data.title,
          "author": res.data.creator.name,
          "items": [...res.data.tracks.data]
      })
    } else {
      console.log("cant identify the platform");
    }
  };

  return (
    <div>
      <SideMenu />
      <div className="main-container" id="artist-pg">
        <Container>
          <Header />
          {loading ? <p>loading...</p> :
            <>
            <img src={playlistToDisplay?.img} width="300px" height="300px" />
            <h2>{playlistToDisplay?.name}</h2>
            <p>{playlistToDisplay?.author}</p>
            <h6>{playlistToDisplay?.items.length} items</h6>
        </>
    }
        </Container>
      </div>
      <Player />
    </div>
  );
};

export default withRouter(PlaylistPage);
