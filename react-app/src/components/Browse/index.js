import React from "react";
import ReactPlayer from "react-player/youtube";
import Slider from "./Sliders";

export default function Browse() {
  return (
    <div className="browse__container">
      <div className="preview__video__container">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100vw"
          height="100vh"
          playing={true}
          controls={false}
        />
      </div>
      <div className="sliders__c">
        <Slider />
      </div>
    </div>
  );
}
