import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

import "./Nav.css";

export default function Nav({ setAuthenticated }) {
  const history = useHistory();
  const [navDD, setNavDD] = useState(false);
  const toggleDD = () => setNavDD(true);
  const toggleDDF = () => setNavDD(false);

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
          <NavLink id="home" to="/browse">
            Home
          </NavLink>
          <NavLink id="list" to="/profile/id/list">
            My List
          </NavLink>
        </div>
        <div>
          <button
            onMouseEnter={toggleDD}
            // onMouseLeave={toggleDDF}
            onClick={toggleDD}
          >
            hover
          </button>
        </div>
        {navDD && (
          <div>
            <div className="nav__logout">
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
