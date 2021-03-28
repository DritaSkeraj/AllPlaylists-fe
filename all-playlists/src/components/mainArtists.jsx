import React from "react";
import Artist from "./artist";
import "../styles/mainArtists.css";

const MainArtists = () => {
  return (
    <div className="artists-container">
    <div className="first-row">
      <h5>Top artists:</h5>
      <p>See all</p>
      </div>
      <div className="artists-row">
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </div>
    </div>
  );
};

export default MainArtists;
