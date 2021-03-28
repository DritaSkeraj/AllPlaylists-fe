import React from "react";
import "../styles/topCharts.css";
import {Container, Row, Col} from "react-bootstrap";
import ChartsSong from "./chartsSong.jsx";

const TopCharts = () => {
  return (
    <div className="charts-container">
      <div className="first-row">
        <h5>Top Charts</h5>
        <p>See all</p>
      </div>
      <Container>
        <Row>
        <ChartsSong/>
        <ChartsSong/>
        <ChartsSong/>
        <ChartsSong/>
        <ChartsSong/>
        </Row>
      </Container>
    </div>
  );
};

export default TopCharts;
