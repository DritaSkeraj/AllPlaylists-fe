import React, { useEffect, useReducer, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/sideMenu.css";
import { MdExplore } from "react-icons/md";
import { BsMusicNoteList, BsFillPlusCircleFill } from "react-icons/bs";
import { SiSpotify, SiDeezer, SiYoutube } from "react-icons/si";
import {getUserProfile} from "../store/user";

import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const SideMenu = () => {

  const [user, setUser] = useState(null);

  const currentUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const data = `token=` + localStorage.getItem("accessToken");
  const state = btoa(data);

  if(currentUser._id)
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  else 
    console.log("uppsss!!!!!!!! anyways, current user: ", currentUser);

  useEffect(()=>{
    dispatch(getUserProfile());
    setTimeout(()=>{
        let u = JSON.parse(localStorage.getItem("currentUser"));
        setUser(u);
    }, 1000)
  }, [])

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
          {user?.spotifyAccount?.sPlaylists.map((p) => (
            <Link to={`/playlist/${p.id}~spotify`}>
            <h6>
              <SiSpotify /> {p.name}
            </h6>
            </Link>
          ))}
          {user?.googleAccount?.ytPlaylists?.items.map((p) => (
              <Link to={`/playlist/${p.id}~youtube`}>
            <h6>
              <SiYoutube /> {p.snippet.title}
            </h6>
            </Link>
          ))}
          {user?.deezerAccount?.dzPlaylists?.data.map((p) => (
              <Link to={`/playlist/${p.id}~deezer`}>
            <h6>
              <SiDeezer /> {p.title}
            </h6>
            </Link>
          ))}
        </div>
        <div className="platforms">
          <a href={`http://localhost:5000/api/users/spotifyLogin?state=` + state}>
            {user?.spotifyAccount ? <SiSpotify className="spotify" /> : <SiSpotify style={{"color": "#44454C"}} /> }
          </a>
          <a href={`http://localhost:5000/api/users/googleRedirect?state=` + state}>
            {user?.googleAccount ? <SiYoutube className="youtube" /> : <SiYoutube style={{"color": "#44454C"}} /> }
          </a>
          <a href={`http://localhost:5000/api/users/deezerRedirect?state=` + state}>
            {user?.deezerAccount ? <SiDeezer className="deezer" /> : <SiDeezer style={{"color": "#44454C"}} /> }
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
