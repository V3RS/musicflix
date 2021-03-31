import React, { useRef } from "react";
import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import SplashNav from "./SplashNav";

import "./Splash.css";

export default function Splash() {
  const input = useRef();

  const user = useSelector((state) => state.session.user);

  if (user && !user.errors) return <Redirect to="/browse" />;

  return (
    <div className="s_c">
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
                  ref={input}
                ></input>
                <span
                  id="email__placeholder"
                  onClick={() => input.current.focus()}
                >
                  Email address
                </span>
              </div>
              <button className="splash__gsbtn">
                Get Started<i id="gs__icon" className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
