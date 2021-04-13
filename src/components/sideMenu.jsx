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
    <div className="menu-container link" >
      <img className="logo" src={logo} />
      <div className="menu">
        <h5>MENU</h5>
        <div className="menu-option">
          <MdExplore className="icon" />
          <Link to="/main" className="option-link">Explore</Link>
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
            <p>
              <SiSpotify /> {p.name}
            </p>
            </Link>
          ))}
          {user?.googleAccount?.ytPlaylists?.items.map((p) => (
              <Link to={`/playlist/${p.id}~youtube`}>
            <p>
              <SiYoutube /> {p.snippet.title}
            </p>
            </Link>
          ))}
          {user?.deezerAccount?.dzPlaylists?.data.map((p) => (
              <Link to={`/playlist/${p.id}~deezer`}>
            <p>
              <SiDeezer /> {p.title}
            </p>
            </Link>
          ))}
        </div>
        <div className="platforms">
          <a href={`https://allplaylists.herokuapp.com/api/users/spotifyLogin?state=` + state}>
            {user?.spotifyAccount ? <SiSpotify className="spotify" /> : <SiSpotify style={{"color": "#44454C"}} /> }
          </a>
          <a href={`https://allplaylists.herokuapp.com/api/users/googleRedirect?state=` + state}>
            {user?.googleAccount ? <SiYoutube className="youtube" /> : <SiYoutube style={{"color": "#44454C"}} /> }
          </a>
          <a href={`https://allplaylists.herokuapp.com/api/users/deezerRedirect?state=` + state}>
            {user?.deezerAccount ? <SiDeezer className="deezer" /> : <SiDeezer style={{"color": "#44454C"}} /> }
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
