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
          url="https://www.youtube.com/watch?v=pvuN_WvF1to&ab_channel=LilDicky"
          width="100vw"
          height="108vh"
          playing={true}
          controls={false}
        />
      </div>
      <div className="sliders__c">
        <ContentSlider title={"Trending Now"} />
      </div>
      <div className="sliders__c">
        <ContentSlider title={"Jazz"} />
      </div>
      <div className="sliders__c">
        <ContentSlider title={"Rap"} />
      </div>
      <div className="sliders__c">
        <ContentSlider title={"Pop"} />
      </div>
    </div>
  );
}
