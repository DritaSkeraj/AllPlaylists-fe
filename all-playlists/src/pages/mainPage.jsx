import React from 'react';
import MainContent from '../components/mainContent';
import Player from '../components/player';
import SideMenu from '../components/sideMenu';

const MainPage = () => {
    return (
        <div>
            <SideMenu/>
            <Player/>
            <MainContent/>
        </div>
    );
};

export default MainPage;