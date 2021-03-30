import React from "react";
import logo from "./bg.jpg";

import "./Splash.css";

export default function Splash() {
  return (
    <div>
      <div className="bg__container">
        <img className="splash__bg" src={logo} alt="albums" />
      </div>
      <h1>test</h1>
    </div>
  );
}
