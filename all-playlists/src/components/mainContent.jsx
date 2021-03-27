import React from 'react';
import "../styles/mainContent.css";
import Header from './header';
import Swiper from './swiper';
import {Container} from "react-bootstrap";

const MainContent = () => {
    return (
        <div className="main-container">
            <Container>
                <Header/>
                <Swiper/>
            </Container>
        </div>
    );
};

export default MainContent;