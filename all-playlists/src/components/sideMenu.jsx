import React from 'react';
import logo from '../assets/logo.png';
import "../styles/sideMenu.css";
import {MdExplore} from "react-icons/md";
import {BsMusicNoteList, BsFillPlusCircleFill} from "react-icons/bs";
import {SiSpotify, SiDeezer, SiYoutube} from "react-icons/si";

const SideMenu = () => {
    return (
        <div className="menu-container">
            <img className="logo" src={logo}/>
            <div className="menu">
                <h5>MENU</h5>
                <div className='menu-option'>
                    <MdExplore className="icon"/> 
                    Explore
                </div>
                <div className='menu-option'>
                    <BsMusicNoteList className="icon"/> 
                    Genres
                </div>
                <div className='menu-option'>
                    <BsFillPlusCircleFill className="icon"/> 
                    Create playlist
                </div>
                <h5 className="mt-3">YOUR PLAYLISTS :</h5>
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