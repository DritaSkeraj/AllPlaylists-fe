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
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Split Button</Button>

          <Dropdown.Toggle variant="success" id="dropdown-split-basic" />

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
