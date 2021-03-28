import React from "react";
import "../styles/mainContent.css";
import Header from "./header";
import Swiper from "./swiper";
import { Container } from "react-bootstrap";
import MainArtists from "./mainArtists";
import MainGenres from "./mainGenres";
import TopCharts from "./topCharts";
import { Row, Col } from "react-bootstrap";

const MainContent = () => {
  return (
    <div className="main-container">
      <Container>
      <Header />
      <Swiper />
      <MainArtists />
        <Row>
          <Col md={4}>
            <MainGenres />
          </Col>
          <Col md={8}>
            <TopCharts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
