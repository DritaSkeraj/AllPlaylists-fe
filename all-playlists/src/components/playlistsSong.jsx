import React from "react";
import "../styles/chartsSong.css";
import { Container, Row, Col } from "react-bootstrap";
import {BiPlay} from "react-icons/bi";
import {BsPlusSquareFill} from "react-icons/bs";

const PlaylistsSong = (props) => {

  const minutes = Math.floor(props.duration / 60);
  const seconds = props.duration - minutes * 60;
  return (
    <div className="song-container song-hover">
      <Container>
        <Row>
          <Col xs={1}>
            <p style={{ paddingTop: "40%", fontWeight: "400" }}>{props?.id+1}</p>
          </Col>
          <Col xs={2}>
            {props?.img && <img src={props?.img}/> }
          </Col>
          <Col xs={5}>
            <Row>
              <p>{props?.artistName}</p>
            </Row>
            <p>{props?.title?.slice(0, 20)}</p>
          </Col>
          {/*<Col xs={2} style={{"textAlign": "right"}}>
            <p style={{"fontSize": "0.8rem", "fontWeight": "400"}}>
              {minutes} : {seconds}
            </p>
  </Col>*/}
          <Col xs={1}>
            <button className="button-play"><BiPlay className="play-icon"/></button>
          </Col>
          <Col xs={1}>
            <BsPlusSquareFill className="add-icon"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaylistsSong;
