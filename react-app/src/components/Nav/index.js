import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import LogoutButton from "../auth/LogoutButton";
import DropDown from "./DropDown";
import { mvSearch } from "../../store/mvsearch";

import "./Nav.css";

export default function Nav({ setAuthenticated }) {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const nav = useRef();
  const search = useRef();
  const searchIc = useRef();

  useEffect(() => {
    dispatch(mvSearch(searchQuery));
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(mvSearch(searchQuery));
    history.push("/search");
  };

  useEffect(() => {
    nav.current && nav.current.classList.add("nav__top__c");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        nav.current && nav.current.classList.add("nav__top__c");
      } else {
        nav.current && nav.current.classList.remove("nav__top__c");
      }
    });
  }, []);

  return (
    <div ref={nav} className="nav__container">
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
          <NavLink activeClassName="act" id="list" to="/creator">
            Creator
          </NavLink>
        </div>
        <div id="nav__icons__container">
          <div ref={search} className="search__c">
            <form
              onSubmit={(e) => handleSearch(e)}
              className="search__form"
              // method="post"
            >
              <input
                type="text"
                id="search__input"
                placeholder="Title, artist, or genre"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></input>
            </form>
            <i
              className="close__search fas fa-times"
              onClick={() => {
                search.current.classList.remove("search__c__open");
                searchIc.current.classList.remove("search__ic__vis");
              }}
            ></i>
          </div>
          <i
            ref={searchIc}
            className="search fas fa-search"
            onClick={(e) => {
              if (search.current.classList.contains("search__c__open")) {
                handleSearch(e);
              }

              search.current.classList.add("search__c__open");
              searchIc.current.classList.add("search__ic__vis");
            }}
          ></i>
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
