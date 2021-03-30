import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import "../styles/sideMenu.css";
import { MdExplore } from "react-icons/md";
import { BsMusicNoteList, BsFillPlusCircleFill } from "react-icons/bs";
import { SiSpotify, SiDeezer, SiYoutube } from "react-icons/si";

import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const SideMenu = () => {
  const currentUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const data = `token=` + localStorage.getItem("accessToken");
  const state = btoa(data);

  return (
    <div className="menu-container">
      <img className="logo" src={logo} />
      <div className="menu">
        <h5>MENU</h5>
        <div className="menu-option">
          <MdExplore className="icon" />
          Explore
        </div>
        <div className="menu-option">
          <BsMusicNoteList className="icon" />
          Genres
        </div>
        <div className="menu-option">
          <BsFillPlusCircleFill className="icon" />
          Create playlist
        </div>
        <h5 className="mt-3">YOUR PLAYLISTS :</h5>
        <div className="playlists">
          {currentUser?.spotifyAccount?.sPlaylists.map((p) => (
            <h6>
              <SiSpotify /> {p.name}
            </h6>
          ))}
          {currentUser?.googleAccount?.ytPlaylists?.items.map((p) => (
            <h6>
              <SiYoutube /> {p.snippet.title}
            </h6>
          ))}
          {currentUser?.deezerAccount?.dzPlaylists?.data.map((p) => (
            <h6>
              <SiDeezer /> {p.title}
            </h6>
          ))}
        </div>
        <div className="platforms">
          <a href={`http://localhost:5000/api/users/spotifyLogin?state=` + state}>
            <SiSpotify className="spotify" />
          </a>
          <a href={`http://localhost:5000/api/users/googleRedirect?state=` + state}>
            <SiYoutube className="youtube" />
          </a>
          <a href={`http://localhost:5000/api/users/deezerRedirect?state=` + state}>
            <SiDeezer className="deezer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
