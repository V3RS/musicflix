import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { closeLogin, openSignup } from "../../store/modal.js";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import "./LoginModal.css";

const LoginForm = ({ authenticated, setAuthenticated, email, updateEmail }) => {
  const [errors, setErrors] = useState([]);
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const emailInput = useRef();
  const pwInput = useRef();

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([""]);
    const user = await dispatch(sessionActions.loginUser({ email, password }));
    // const data = await user.json()

    if (!user.errors) {
      setAuthenticated(true);
      dispatch(closeLogin());
    } else {
      setErrors(user.errors);
    }

    // const user = await login(email, password);
    // if (!user.errors) {
    // } else {
    //   setErrors(user.errors);
    // }
  };

  const onDemoLogin = () => {
    setAuthenticated(true);
    dispatch(sessionActions.demoLoginUser());
    dispatch(closeLogin());
  };

  // const updateEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) return <Redirect to="/browse" />;

  const closeModal = () => dispatch(closeLogin());

  const onSwitch = () => {
    dispatch(closeLogin());
    dispatch(openSignup());
  };

  return (
    <div className="login-container">
      <button className="close__modal" onClick={closeModal}>
        <i className="fas fa-times"></i>
      </button>
      <div id="login-title">Sign In</div>
      <form onSubmit={onLogin}>
        <div className="liform__container">
          <div className="login-input-container">
            <div id="login__em__c">
              <input
                name="email"
                type="text"
                placeholder=" "
                ref={emailInput}
                value={email}
                onChange={updateEmail}
                className="login-inputs"
                id="email_login_input"
                required
              />
              <span
                id="email__login__placeholder"
                onClick={() => emailInput.current.focus()}
              >
                Email
              </span>
            </div>
            <div id="login__pw__c">
              <input
                name="password"
                type="password"
                placeholder=" "
                ref={pwInput}
                value={password}
                onChange={updatePassword}
                id="login-pw-input"
                className="login-inputs"
                required
              />
              <span
                id="pw__login__placeholder"
                onClick={() => pwInput.current.focus()}
              >
                Password
              </span>
            </div>
          </div>
          <button type="submit" className="loginFormBtns">
            Sign In
          </button>
        </div>
        <div className="login-or">
          <div className="before-or"></div>
          <div>or</div>
          <div className="after-or"></div>
        </div>
        <button
          className="loginFormBtns"
          id="demoBtn"
          onClick={onDemoLogin}
          type="button"
        >
          Demo Log in
        </button>
      </form>
      <div className="login__switch">
        New to Musicflix?
        <button onClick={onSwitch} className="login_switch_btn">
          Sign up now.
        </button>
      </div>
      <div>
        {errors.map((error) => (
          <div key={error} className="login__errors">
            {error}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginForm;
