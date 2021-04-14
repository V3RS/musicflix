import React from "react";
// import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import { openLogin } from "../../../store/modal";
import { useDispatch } from "react-redux";

import "./SplashNav.css";

export default function SplashNav() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="splash__nav__container">
      <div className="splash__nav">
        <div className="splash__logo__container">
          <img
            id="splash__logo"
            onClick={() => history.push("/")}
            src="https://musicflix.s3.us-east-2.amazonaws.com/logo.png"
            alt="musicflix"
          />
        </div>
        <div className="splash__nav__github">
          <button className="splash__ghbtn">
            <a
              id="ghatag"
              href="https://github.com/V3RS/musicflix"
              target="_blank"
            >
              <i id="sn_git" className="fab fa-github"></i>Github
            </a>
          </button>
        </div>
        <div className="splash__nav__signin">
          <button
            className="sn__signin__btn"
            onClick={() => dispatch(openLogin())}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
