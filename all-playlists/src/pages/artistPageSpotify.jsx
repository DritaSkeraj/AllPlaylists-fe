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

const ArtistPageSpotify = (props) => {
  
  return (
    <div>
      <SideMenu />
      <div className="main-container" id="artist-pg">
        <p>{props.match.location}</p>
      </div>
      <Player />
    </div>
  );
};

export default withRouter(ArtistPageSpotify);
