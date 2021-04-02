import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
// import LogoutButton from "../auth/LogoutButton";
import DropDown from "./DropDown";

import "./Nav.css";

export default function Nav({ setAuthenticated }) {
  const history = useHistory();
  // const [navDD, setNavDD] = useState(false);
  // const toggleDD = () => setNavDD(true);
  // const toggleDDF = () => setNavDD(false);

  return (
    <div className="nav__container">
      <div className="nav">
        <div className="logo__container">
          <img
            id="logo"
            onClick={() => history.push("/")}
            src={logo}
            alt="musicflix"
          />
        </div>
        <div className="navlinks">
          <NavLink activeClassName="act" id="home" to="/browse">
            Home
          </NavLink>
          <NavLink activeClassName="act" id="list" to="/profile/id/list">
            My List
          </NavLink>
        </div>
        <div id="nav__icons__container">
          <i className="search fas fa-search"></i>
          <a
            id="nav__linktag"
            href="https://www.linkedin.com/in/veerkaran-singh-45b4a9190/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            id="nav__ghatag"
            href="https://github.com/V3RS/musicflix"
            target="_blank"
          >
            <i id="sn_git" className="fab fa-github"></i>
          </a>
          <DropDown setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </div>
  );
}
