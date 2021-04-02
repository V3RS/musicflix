import React from "react";
import ReactPlayer from "react-player/youtube";
import ContentSlider from "./ContentSlider";
import "./Browse.css";

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
        <ContentSlider />
      </div>
      <div className="sliders__c">
        <ContentSlider />
      </div>
      <div className="sliders__c">
        <ContentSlider />
      </div>
      <div className="sliders__c">
        <ContentSlider />
      </div>
    </div>
  );
}
