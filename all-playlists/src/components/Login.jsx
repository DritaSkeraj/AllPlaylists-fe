import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
//import "../styles/auth.scss";
import "../styles/login.css";
import logo from "../assets/logo.png";
import Swiper from "./loginSwiper";

import { Row, Col } from "react-bootstrap";
import { isAuthUser } from "../helpers/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylists, getUserProfile, login } from "../store/user";
import store from "../store/setup/store";

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthUser()) {
      history.push("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };
  const [errorMsg, setErrorMsg] = useState("");

  const { username, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(username) || isEmpty(password)) {
      setErrorMsg("All fields are required");
    } else {
      let { username, password } = formData;
      let body = { username, password };
      dispatch(login(body));
      setTimeout(() => {
        dispatch(getUserProfile());
        const storeState = store.getState();
        console.log("🚩🚩🚩: ", storeState.user.errorMessage)
        if(storeState.user.errorMessage == "Invalid Credentials"){
          history.block(() => {
            console.log("not sending you anywhere with those credentials: 🚗🚗🚗")
            });
            setErrorMsg("Wrong username or password!");
        }else{
          history.push("/main");
          console.log("these would do 🚀🚀🚀");
        }
      }, 1000);
    }
  };

  const showSignupForm = () => {
    return (
      <div className="container">
        <div className="row">
        <p className="login-info">Your username:</p>
          <input
            onChange={handleFormChange}
            value={username}
            name="username"
            className="auth-input col-md-12 mb-3 "
            type="text"
            placeholder="username"
          />
        </div>
        <div className="row">
          <p className="login-info">Your password:</p>
          <input
            onChange={handleFormChange}
            value={password}
            name="password"
            className="auth-input col-md-12 mb-3 "
            type="password"
            placeholder="******"
          />
        </div>
        <div className="row">
          <input type="checkbox" className="check"/>
          <p className="login-info">Keep me logged in.</p>
        </div>
        <div className="row">
          <input
            onClick={handleSubmit}
            className="auth-input submit-btn col-md-12 mb-3 "
            type="submit" 
            value="Log in"
            />
        </div>
        <div className="bottom-info">
          <p>Don't have an account? <span className="login-link">Sign up!</span></p>
          <p><span className="login-link">Forgot password?</span></p>
        </div>
      </div>
    );
  };

  return (
    <div className="login-pg-container darker-shade">
      <div className="auth-box">
        <Row>
          <Col md={5} className="form-side">
          <img src={logo} class="logo" style={{"marginLeft": "-2em"}}/>
          <h4>Log in.</h4>
          <p className="login-info">Enter with your data that you entered during your registration.</p>
          {showSignupForm()}
        <p>{errorMsg}</p>
        </Col>
        <Col md={6} className="login-jubotron login-swiper-container">
        <Swiper />
        </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
