import React from "react";
import "../styles/chartsSong.css";
import { Container, Row, Col } from "react-bootstrap";
import {BiPlay} from "react-icons/bi";
import {BsPlusSquareFill} from "react-icons/bs";

const ChartsSong = () => {
  return (
    <div className="song-container">
      <Container>
        <Row>
          <Col xs={1}>
            <p style={{ paddingTop: "40%", fontWeight: "400" }}>01</p>
          </Col>
          <Col xs={2}>
            <img src="http://placehold.it/50x50" />
          </Col>
          <Col xs={6}>
            <Row>
              <p>Artist</p>
            </Row>
            <p>Song</p>
          </Col>
          <Col xs={1}>
            <p>3:45</p>
          </Col>
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

export default ChartsSong;
