import React from "react";
import "../styles/chartsSong.css";
import { Container, Row, Col } from "react-bootstrap";
import {BiPlay} from "react-icons/bi";
import {BsPlusSquareFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {play} from "../store/nowPlaying";

const ChartsSong = (props) => {

  const minutes = Math.floor(props.data.duration / 60);
  const seconds = props.data.duration - minutes * 60;

  const dispatch = useDispatch();

  const handlePlay = (song) => {
    console.log("🎈🎈🎈🎈🎈🎈: ", song);
    dispatch(play({song, "platform": "deezer"}));
  }

  return (
    <div className="song-container song-hover">
      <Container>
        <Row>
          <Col xs={1}>
            <p style={{ paddingTop: "40%", fontWeight: "400" }}>{props.id+1}</p>
          </Col>
          <Col xs={2}>
            {props.img ? <img src={props.img}/> : <img src={props.data.artist.picture} />}
          </Col>
          <Col xs={5}>
            <Row>
              <p>{props.data.artist.name}</p>
            </Row>
            <p>{props.data.title_short}</p>
          </Col>
          <Col xs={2} style={{"textAlign": "right"}}>
            <p style={{"fontSize": "0.8rem", "fontWeight": "400"}}>
              {minutes} : {seconds}
            </p>
          </Col>
          <Col xs={1}>
            <button className="button-play" onClick={()=>handlePlay(props?.item)}><BiPlay className="play-icon"/></button>
          </Col>
          <Col xs={1}>
            <BsPlusSquareFill className="add-icon"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChartsSong;
