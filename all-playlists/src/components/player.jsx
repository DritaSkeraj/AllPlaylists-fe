import React from "react";
import "../styles/player.css";
import {AiOutlineBackward, AiFillPlayCircle, AiOutlineForward} from "react-icons/ai";
import {BsFillVolumeUpFill} from "react-icons/bs";

const Player = () => {
  return (
    <div className="player-container">
      <section
        className="player"
        style={{"width": "100%", "position": "fixed"}}
      >
        <div className="player-albumart">
          <div className="nowplaying-albumart mx-3">
            <img src="http://placehold.it/50x50" />
          </div>
          <div className="playing-info">
            <div className="nowplaying-title">Song title</div>
            <div className="nowplaying-artist">Artist name</div>
          </div>
        </div>

        <div className="middle-part">
          <div className="player-btn player-controller">
            <AiOutlineBackward className="player-icon"/>
            <AiFillPlayCircle className="player-icon"/>
            <AiOutlineForward className="player-icon"/>
          </div>
          <div className="player-nowplaying">
            <div className="player-nowplaying-time">00.01</div>
            <div className="player-progress">
              <div id="nowplayingProgress"></div>
            </div>
            <div className="player-totaltime">24:42</div>
          </div>
        </div>
        <div className="player-setting">
          <div className="player-volume">
            <BsFillVolumeUpFill className="player-icon"/>
            <div id="nowplayingVolume"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Player;
