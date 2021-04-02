import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function HoverSlide({ hover, setHover }) {
  const [mute, setMute] = useState(true);

  return (
    <div className="hover__slide__c album">
      <div className="h__slide__c">
        <div className="hover__vid__c">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=pvuN_WvF1to&ab_channel=LilDicky"
            width="350px"
            height="275px"
            playing={true}
            controls={false}
            muted={mute}
            loop={true}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>
        <div className="hover__info">
          <h1>Title of music video</h1>
          <h3>Artist of music video</h3>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
