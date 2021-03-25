import React from 'react';
import logo from '../assets/logo.png';
import "../styles/sideMenu.css";
import {MdExplore} from "react-icons/md";
import {BsMusicNoteList, BsFillPlusCircleFill} from "react-icons/bs";
import {SiSpotify, SiDeezer, SiYoutube} from "react-icons/si";

const SideMenu = () => {
    return (
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="menu">
                <h5>MENU</h5>
                <div className='option'>
                    <MdExplore className="icon"/> 
                    Explore
                </div>
                <div className='option'>
                    <BsMusicNoteList className="icon"/> 
                    Genres
                </div>
                <div className='option'>
                    <BsFillPlusCircleFill className="icon"/> 
                    Create playlist
                </div>
                <h5>YOUR PLAYLISTS :</h5>
                <div className="playlists">
                <h6>blah blah blah</h6>
                <h6>blah blah blah</h6>
                <h6>blah blah blah</h6>
                <h6>blah blah blah</h6>
                <h6>blah blah blah</h6>
                <h6>blah blah blah</h6>
                <h6>blah blah blah</h6>
                </div>
                <div className="platforms">
                    <SiSpotify className="spotify"/>
                    <SiDeezer className="deezer"/>
                    <SiYoutube className="youtube"/>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;