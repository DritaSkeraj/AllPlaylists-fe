import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../store/user";

const OAuths = (props) => {
  const currentUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const data = `token=` + localStorage.getItem("accessToken");
  const state = btoa(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <h1>Welcome {currentUser.username}!</h1>
      <a href={`http://localhost:5000/api/users/spotifyLogin?state=` + state}>
        <button>Sign in with Spotify!</button>
      </a>
      <a href={`http://localhost:5000/api/users/googleRedirect?state=` + state}>
        <button>Sign in with Youtube!</button>
      </a>
      <a href={`http://localhost:5000/api/users/deezerRedirect?state=` + state}>
        <button>Sign in with Deezer!</button>
      </a>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default OAuths;
