import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const OAuths = () => {
 
  return (
    <div style={{display: "flex", flexDirection: "column", width: "30%", justifyContent: "center", margin: "0 auto"}}>
    
      <a href="http://localhost:5000/api/users/spotifyRedirect">
        <button>Sign in with Spotify!</button>
      </a>
      <a href="http://localhost:5000/api/users/googleRedirect">
        <button>Sign in with Youtube!</button>
      </a>
    </div>
  );
};

export default OAuths;
