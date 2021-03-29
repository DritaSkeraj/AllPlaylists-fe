import React from "react";
import "../styles/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const Header = () => {

  const currentUser = useSelector((state) => state.user.data)
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
            <img src={currentUser?.image} className="profile-img"/>
          </Button>
          <Dropdown.Toggle id="dropdown-split-basic">
          {currentUser?.username}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
