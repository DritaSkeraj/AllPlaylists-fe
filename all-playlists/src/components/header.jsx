import React from "react";
import "../styles/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-holder">
        <AiOutlineSearch />
        <input className="search-input" placeholder="Type here to search" />
      </div>
      <div className="user-dropdown">
        <Dropdown as={ButtonGroup} className='dropdown-wrapper'>
          <Button className='profile-btn'>
            <img src="http://placehold.it/10x10" className="profile-img"/>
          </Button>
          <Dropdown.Toggle id="dropdown-split-basic">
          Name Surname
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
