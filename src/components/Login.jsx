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
import { getUserPlaylists, getUserProfile, login, signup, setInitalState } from "../store/user";
import store from "../store/setup/store";

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const [registered, setRegistered] = useState(true);

  useEffect(() => {
    if (isAuthUser()) {
      history.push("/");
    }
  }, []);

  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  const [signupFormData, setSignupFormData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleRegisterFormChange = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };
  const [errorMsg, setErrorMsg] = useState("");

  const { name, surname, username, email, password } = signupFormData;

  useEffect(()=>{
    setErrorMsg("")
  }, [username, password])

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      isEmpty(username) ||
      isEmpty(password) ||
      isEmpty(email) ||
      isEmpty(name) ||
      isEmpty(surname)
    ) {
      setErrorMsg("All fields are required!");
    } else {
      let { name, surname, username, email, password } = signupFormData;
      let body = { name, surname, username, email, password };
      let loginBody = {username, password};
      dispatch(signup(body));
      setTimeout(()=>{
        dispatch(login(loginBody));
        dispatch(getUserProfile());
      }, 1000)
      setTimeout(() => {
        dispatch(getUserProfile());
        const storeState = store.getState();
        console.log("🚩🚩🚩: ", storeState.user.errorMessage)
        // if(storeState.user.errorMessage == "Invalid Credentials"){
        //   history.block(() => {
        //     console.log("not sending you anywhere with those credentials: 🚗🚗🚗")
        //     });
        //     setErrorMsg("Wrong username or password!");
        // }else{
          history.push("/main");
        //   console.log("these would do 🚀🚀🚀");
        // }
      }, 1000);
    }
  };

  const handleFormChange = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };
  //const [errorMsg, setErrorMsg] = useState("");

  //const { username, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(username) || isEmpty(password)) {
      setErrorMsg("All fields are required!");
    } else {
      let { username, password } = signupFormData;
      let body = { username, password };
      dispatch(login(body));
      setTimeout(() => {
        dispatch(getUserProfile());
        const storeState = store.getState();
        console.log("🚩🚩🚩: ", storeState.user.errorMessage);
        if (storeState.user.errorMessage == "Invalid Credentials") {
          history.block(() => {
            console.log(
              "not sending you anywhere with those credentials: 🚗🚗🚗"
            );
          });
          setErrorMsg("Wrong username or password!");
        } else {
          history.push("/main");
          console.log("these would do 🚀🚀🚀");
        }
      }, 1000);
    }
  };

  const showSigninForm = () => {
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
          <input type="checkbox" className="check" />
          <p className="login-info">Keep me logged in.</p>
        </div>
        <div className="row">
          <input
            onClick={handleSubmit }
            className="auth-input submit-btn col-md-12 mb-3 "
            type="submit"
            value="Log in"
          />
        </div>
        <div className="bottom-info">
          <p>
            Don't have an account?{" "}
            <span className="login-link" onClick={() => setRegistered(false)}>
              Sign up!
            </span>
          </p>
          <p>
            <span className="login-link">Forgot password?</span>
          </p>
        </div>
      </div>
    );
  };

  const showSignupForm = () => {
    return (
      <div className="container">
        <div className="row">
          <p className="login-info">Name:</p>
          <input
            onChange={handleRegisterFormChange}
            value={name}
            name="name"
            className="auth-input col-md-12 mb-3 "
            type="text"
            placeholder="name"
          />
        </div>
        <div className="row">
          <p className="login-info">Surname:</p>
          <input
            onChange={handleRegisterFormChange}
            value={surname}
            name="surname"
            className="auth-input col-md-12 mb-3 "
            type="text"
            placeholder="surname"
          />
        </div>
        <div className="row">
          <p className="login-info">Email:</p>
          <input
            onChange={handleRegisterFormChange}
            value={email}
            name="email"
            className="auth-input col-md-12 mb-3 "
            type="text"
            placeholder="email"
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
          <p className="login-info">Username:</p>
          <input
            onChange={handleRegisterFormChange}
            value={username}
            name="username"
            className="auth-input col-md-12 mb-3 "
            type="text"
            placeholder="username"
          />
        </div>
        <div className="row">
          <input type="checkbox" className="check" />
          <p className="login-info">Keep me logged in.</p>
        </div>
        <div className="row">
          <input
            onClick={handleRegisterSubmit}
            className="auth-input submit-btn col-md-12 mb-3 "
            type="submit"
            value="Sign up"
          />
        </div>
        <div className="bottom-info">
          <p>
            Already created an account?{" "}
            <span className="login-link" onClick={() => setRegistered(true)}>
              Login!
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="login-pg-container darker-shade">
      <div className="auth-box">
        <Row>
          <Col md={5} className="form-side">
            <img src={logo} class="logo" style={{ marginLeft: "-2em" }} />
            {registered ? (
              <>
                <h4>Log in.</h4>
                <p className="login-info">
                  Enter with your data that you entered during your
                  registration.
                </p>
                {showSigninForm()}
              </>
            ) : (
              <>
                <h4>Sign up.</h4>
                {showSignupForm()}
              </>
            )}
            <p className="error-message">{errorMsg}</p>
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
