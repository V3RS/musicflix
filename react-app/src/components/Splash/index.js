import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import SignupModal from "../SignupModal";
import LoginModal from "../LoginModal";

import { useSelector, useDispatch } from "react-redux";

import SplashNav from "./SplashNav";
import { openSignup } from "../../store/modal";

import "./Splash.css";

export default function Splash({ authenticated, setAuthenticated }) {
  const input = useRef();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  if (authenticated) return <Redirect to="/browse" />;

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="s_c">
      <SignupModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        email={email}
        updateEmail={updateEmail}
      />
      <LoginModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        email={email}
        updateEmail={updateEmail}
      />
      <div className="sc">
        <div className="sc2"></div>

        <SplashNav />
        <div className="splash__container">
          <div className="splash__title__container">
            <div className="splash__title">
              Unlimited music, music videos, and more.
            </div>
            <div className="splash__second__heading">
              Watch anywhere. Cancel anytime.
            </div>
            <div className="splash__third__heading">
              {" "}
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="splash__email__container">
              <div className="s__email__c">
                <input
                  type="email"
                  placeholder=" "
                  className="splash_input"
                  onChange={updateEmail}
                  value={email}
                  ref={input}
                ></input>
                <span
                  id="email__placeholder"
                  onClick={() => input.current.focus()}
                >
                  Email address
                </span>
              </div>
              <button
                className="splash__gsbtn"
                onClick={() => dispatch(openSignup())}
              >
                Get Started<i id="gs__icon" className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
