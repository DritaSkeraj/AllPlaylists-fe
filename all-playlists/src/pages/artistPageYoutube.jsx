import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import "../styles/artist.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SideMenu from "../components/sideMenu";
import Player from "../components/player";
import ChartsSong from "../components/chartsSong";
import "../styles/mainContent.css";
import "../styles/artistPage.css";
import { Row, Col } from "react-bootstrap";

const ArtistPageYoutube = (props) => {

  const id = props.location.pathname.split("/")[2];
  const [channel, setChannel] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(async()=>{
    const channelData = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id={id}&key={process.env.GOOGLE_SECRET}`,
    {
      headers: {
        Authorization: `Bearer ${currentUser.googleAccount.at}`,
        Accept: 'application/json'
      },
    }
    );
    console.log("youtube channel data: ", channelData);
    setChannel(channelData);
  }, [])
  
  return (
    <div>
      <SideMenu />
      <div className="main-container" id="artist-pg">
        <p>youtube</p>
        <p>{id}</p>
      </div>
      <Player />
    </div>
  );
};

export default withRouter(ArtistPageYoutube);
