import React from "react";

import SplashNav from "./SplashNav";

import "./Splash.css";

export default function Splash() {
  return (
    <div>
      <div className="sc">
        <div className="sc2"></div>

        <SplashNav />
        <div className="splash__container"></div>
      </div>
    </div>
  );
}
