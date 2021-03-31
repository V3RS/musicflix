import React from "react";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

import "./Nav.css";

export default function Nav({ setAuthenticated }) {
  const history = useHistory();

  return (
    <div className="splash__nav__container">
      <div className="splash__nav">
        <div className="splash__logo__container">
          <img
            id="splash__logo"
            onClick={() => history.push("/")}
            src={logo}
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
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </div>
  );
}
