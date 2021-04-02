import React, { useState } from "react";
import "./IndivSlide.css";

import HoverSlide from "../HoverSlide";

export default function IndivSlide() {
  const [hover, setHover] = useState(false);

  return (
    <div className="album__container">
      {hover ? (
        <HoverSlide hover={hover} setHover={setHover} />
      ) : (
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
      )}
    </div>
  );
}
