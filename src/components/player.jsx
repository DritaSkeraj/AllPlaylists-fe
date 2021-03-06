import React, { useState } from "react";
import "../styles/player.css";
import {
  AiOutlineBackward,
  AiFillPlayCircle,
  AiOutlineForward,
} from "react-icons/ai";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
import YouTube from "react-youtube";
import musicImg from "../assets/music2.jpg";
import YoutubePlayer from './youtubePlayer';

const Player = () => {
  
  const currentSong = useSelector((state) => state.nowPlaying.nowPlaying);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const opts = {
    height: "68",
    width: "68",
    playerVars: {
      autoplay: 0,
    },
  };

  //const id = 3135556;
  const id = currentSong?.song?.id;
  const src = `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=EF5466&layout=&size=medium&type=tracks&id=${id}&app_id=468042`;

  let display = "display: block";
  if (currentSong?.platform === "deezer") {
    display = "display: none !important";
  }

  const playSong = () => {
    console.log("play song clicked");
    return 2;
  }

  return (
    <>
      {currentSong?.platform === "spotify" && (
        <SpotifyPlayer
          id="spotify-player-container"
          className="player-container player"
          token={currentUser?.spotifyAccount?.at}
          uris={currentSong?.song?.track?.uri}
          styles={{
            sliderColor: '#1db954'
          }}
        />
      )}
      {currentSong?.platform === "deezer" && (
        <div className="deezer-player-container">
          {console.log("nowPlayiing:::::", currentSong)}
          <section
            className="deezer-player"
            style={{ width: "100%", position: "fixed" }}
          >
            <iframe
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              src={src}
              width="700"
              height="360"
              className="deezer-iframe"
            ></iframe>
          </section>
        </div>
      )}
      {(currentSong?.platform === "youtube" || !currentSong?.platform ) && 
      (
        <div className="player-container">
          {console.log("nowPlayiing:::::", currentSong)}
          <section
            className="player"
            style={{ width: "100%", position: "fixed" }}
          >
                {currentSong?.platform === "youtube" &&

                <YoutubePlayer id={currentSong?.song?.contentDetails?.videoId}/>}
                {!currentSong?.platform &&
                  <>
            <div className="player-albumart" style={{ display }}>
              <div className="nowplaying-albumart mx-3">
              {!currentSong?.platform && <></> }
                  <img
                    src={
                      currentSong?.platform === "spotify"
                        ? currentSong?.song?.track?.album?.images[0]?.url
                        : currentSong?.platform === "youtube"
                        ? currentSong?.song?.snippet?.thumbnails?.default?.url
                        : currentSong?.platform === "deezer"
                        ? currentSong?.song?.album.cover
                        : musicImg
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
                    : ""}
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
                <AiFillPlayCircle
                  className="player-icon"
                  onClick={playSong}
                />
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
                </>
              }
              
          </section>
        </div>
              )}
    </>
  );
};

export default Player;
