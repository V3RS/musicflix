import React, { useState } from "react";
import "./IndivSlide.css";

import HoverSlide from "../HoverSlide";

export default function IndivSlide() {
  const [hover, setHover] = useState(false);

  return hover ? (
    <div
      className="hover__c album"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <HoverSlide hover={hover} setHover={setHover} />
    </div>
  ) : (
    <div className="album__container">
      <img
        className="album"
        src="https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/americanteen.jpg"
        alt="album cover"
        onMouseEnter={() => {
          setTimeout(() => {
            setHover(true);
          }, 300);
        }}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
}
