import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import ContentSlider from "./ContentSlider";
import "./Browse.css";

export default function Browse() {
  const [mute, setMute] = useState(true);

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
          muted={mute}
          loop={true}
        />
        <div id="prev__video__info">
          <div id="prev__video__title__container">
            <h1>Earth</h1>
            <h3 id="prev__vid__artist">Lil Dicky</h3>
            {/* <p id="prev__vid__description">
              Written by: David Burd, Benjamin Levin, Magnus August Høiberg,
              Josh Coleman and Jamil Chammas Produced by: Benny Blanco...
            </p> */}
          </div>
          <div id="prev__video__btns">
            <button id="prev__v__play">
              <i className="ic fas fa-play"></i>Play
            </button>
            <button id="prev__v__info">
              <i className="ic fas fa-info-circle"></i>More Info
            </button>
            <button id="prev__v__vol" onClick={() => setMute(!mute)}>
              {mute ? (
                <i className="fas fa-volume-mute"></i>
              ) : (
                <i className="fas fa-volume-up"></i>
              )}
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
