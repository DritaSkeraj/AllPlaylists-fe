import React from "react";
import "../styles/chartsSong.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { play } from "../store/nowPlaying";

const PlaylistsSong = (props) => {

  const minutes = Math.floor(props.duration / 60);
  const seconds = props.duration - minutes * 60;
  const dispatch = useDispatch();

  const handleSpotifyPlay = (song) => {
    console.log("🎈🎈🎈🎈🎈🎈: ", song);
    dispatch(play({ song, platform: props?.platform }));
  };

  return (
    <div className="song-container song-hover" style={{ width: "auto" }}>
      <Container>
        <Row>
          <Col xs={1}>
            <p style={{ paddingTop: "40%", fontWeight: "400" }}>
              {props?.id + 1}
            </p>
          </Col>
          <Col xs={2}>{props?.img && <img src={props?.img} />}</Col>
          <Col xs={6}>
            <Row>
              {props?.platform == "deezer" ? (
                <Link to={`/artist/${props.artistId}`}>
                  <p className="truncate-text">{props?.artistName}</p>
                </Link>
              ) : props?.platform == "spotify" ? (
                <Link to={`/spotifyArtist/${props.artistId}`}>
                  <p className="truncate-text">{props?.artistName}</p>
                </Link>
              ) : (
                <Link to={`/youtubeArtist/${props.artistId}`}>
                  <p className="truncate-text">{props?.artistName}</p>
                </Link>
              )}
            </Row>
            <p className="truncate-text">{props?.title}</p>
          </Col>
          {/*<Col xs={2} style={{"textAlign": "right"}}>
            <p style={{"fontSize": "0.8rem", "fontWeight": "400"}}>
              {minutes} : {seconds}
            </p>
  </Col>*/}
          <Col xs={1}>
            <button
              className="button-play"
              onClick={() => handleSpotifyPlay(props?.item)}
            >
              <BiPlay className="play-icon" />
            </button>
          </Col>
          <Col xs={1}>
            <BsPlusSquareFill className="add-icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaylistsSong;
