import React from "react";
import "../styles/player.css";
import {
  AiOutlineBackward,
  AiFillPlayCircle,
  AiOutlineForward,
} from "react-icons/ai";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = () => {

  const currentSong = useSelector((state) => state.nowPlaying.nowPlaying);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      {currentSong?.platform != "spotify" ? (
        <div className="player-container">
          {console.log("nowPlayiing:::::", currentSong)}
          <section
            className="player"
            style={{ width: "100%", position: "fixed" }}
          >
            <div className="player-albumart">
              <div className="nowplaying-albumart mx-3">
                <img
                  src={
                    currentSong?.platform === "spotify"
                      ? currentSong?.song?.track?.album?.images[0]?.url
                      : currentSong?.platform === "youtube"
                      ? currentSong?.song?.snippet?.thumbnails?.default?.url
                      : currentSong?.platform === "deezer"
                      ? currentSong?.song?.album.cover
                      : "http://placehold.it/50x50"
                  }
                />
              </div>
              <div className="playing-info">
                <div className="nowplaying-title">
                  {currentSong?.platform === "spotify"
                    ? currentSong?.song?.track?.name
                    : currentSong?.platform === "youtube"
                    ? currentSong?.song?.snippet?.title
                    : currentSong?.platform === "deezer"
                    ? currentSong?.song?.title_short
                    : "you are not playing anything yet"}
                </div>
                <div className="nowplaying-artist">
                  {currentSong?.platform === "spotify"
                    ? currentSong?.song?.track?.artists[0]?.name
                    : currentSong?.platform === "youtube"
                    ? currentSong?.song?.snippet?.videoOwnerChannelTitle
                    : currentSong?.platform === "deezer"
                    ? currentSong?.song?.artist?.name
                    : ""}
                </div>
              </div>
            </div>

            <div className="middle-part">
              <div className="player-btn player-controller">
                <AiOutlineBackward className="player-icon" />
                <AiFillPlayCircle className="player-icon" />
                <AiOutlineForward className="player-icon" />
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
                <BsFillVolumeUpFill className="player-icon" />
                <div id="nowplayingVolume"></div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <SpotifyPlayer id="spotify-player-container" className="player-container player"
          token={currentUser?.spotifyAccount?.at} 
          uris={currentSong?.song?.track?.uri}
        />
      )}
    </>
  );
};

export default Player;
