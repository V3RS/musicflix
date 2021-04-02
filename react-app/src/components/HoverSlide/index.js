import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

import "./HoverSlide.css";

export default function HoverSlide() {
  const [mute, setMute] = useState(true);

  return (
    <div className="hover__slide__c">
      <div className="h__slide__c">
        <div className="hover__vid__c">
          <ReactPlayer
            className="react-player2"
            url="https://www.youtube.com/watch?v=0NChtZCDCsY&ab_channel=KhalidVEVO"
            width="350px"
            height="270px"
            playing={true}
            controls={false}
            muted={mute}
            loop={true}
          />
        </div>
        <div className="hover__info">
          <h1 id="hover__title">Title of music video</h1>
          <h3 id="hover__artist">Artist of music video</h3>
          <button id="hover__mute" onClick={() => setMute(!mute)}>
            {mute ? (
              <i className="fas fa-volume-mute"></i>
            ) : (
              <i className="fas fa-volume-up"></i>
            )}
          </button>
          <button id="hover__play">
            <i className="fas fa-play"></i>
          </button>
          <button id="hover__add">
            <i className="fas fa-plus"></i>
          </button>
          <button id="hover__info">
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
