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
          muted={true}
        />
        <div id="prev__video__info">
          <div id="prev__video__title__container">
            <h1>Earth</h1>
            <h3 id="prev__vid__artist">LilDicky</h3>
            <p id="prev__vid__description">
              Written by: David Burd, Benjamin Levin, Magnus August Høiberg,
              Josh Coleman and Jamil Chammas Produced by: Benny Blanco...
            </p>
          </div>
          <div id="prev__video__btns">
            <button id="prev__v__play">
              <i className="ic fas fa-play"></i>Play
            </button>
            <button id="prev__v__info">
              <i className="ic fas fa-info-circle"></i>More Info
            </button>
          </div>
        </div>
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
