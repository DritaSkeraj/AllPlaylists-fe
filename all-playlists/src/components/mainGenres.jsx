import React from "react";
import "../styles/mainGenres.css";
import { Container, Row, Col } from "react-bootstrap";

const MainGenres = () => {
  return (
    <div className="genres-container">
      <div className="first-row">
        <h5>Top Genres</h5>
        <p>See all</p>
      </div>
      <Container>
      <Row>
        <Col md={7}>
          <div className="gen1">
            <p>Rock</p>
          </div>
        </Col>
        <Col md={5}>
          <div className="gen2">
            <p>Rock</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="gen3">
            <p>Rock</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="gen4">
            <p>Rock</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <div className="gen5">
            <p>Rock</p>
          </div>
        </Col>
        <Col md={5}>
          <div className="gen6">
            <p>Rock</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="gen4">
            <p>Rock</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="gen3">
            <p>Rock</p>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default MainGenres;
