import React, { useState, useEffect } from "react";
import "../styles/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../store/user";

const Header = () => {

  const [user, setUser] = useState(null);

  const currentUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logout());
    history.push("/");
	};

  if(currentUser._id)
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  else 
    console.log("phew!!!!!!!! anyways, current user: ", currentUser);

  useEffect(()=>{
    setTimeout(()=>{
        let u = JSON.parse(localStorage.getItem("currentUser"));
        console.log("current user from useEffect========> ", u)
        setUser(u);
    }, 1000)
  }, [])

  return (
    <div className="header-container">
      <div className="options-holder">
        <h5>MUSIC</h5>
        <h5>PODCAST</h5>
        <h5>LIVE</h5>
      </div>
      <div className="search-holder">
        <AiOutlineSearch />
        <input className="search-input" placeholder="Type here to search" />
      </div>
      <div className="user-dropdown">
        <Dropdown as={ButtonGroup} className='dropdown-wrapper'>
          <Button className='profile-btn'>
            <img src={user?.image} className="profile-img"/>
          </Button>
          <Dropdown.Toggle id="dropdown-split-basic">
          {user?.username}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">My profile</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
