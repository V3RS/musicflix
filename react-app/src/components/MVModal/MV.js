import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./MV.css";

export default function MV({ mv }) {
  const [mute, setMute] = useState(true);
  return (
    <div id="modal__mv__c">
      <ReactPlayer
        className="react-player"
        url={mv?.video_url}
        width="48vw"
        height="50vh"
        playing={true}
        controls={false}
        muted={mute}
        loop={true}
      />
      <div id="modal__video__info">
        <div id="modal__video__title__container">
          <h1>{mv?.title}</h1>
          <h3 id="modal__vid__artist">{mv?.artist}</h3>
        </div>
        <div id="modal__video__btns">
          <button
            id="modal__v__play"
            // onClick={() => history.push(`/mv/2`)}
          >
            <i className="ic fas fa-play"></i>
            Play
          </button>
          <button id="modal__add">
            <i className="fas fa-plus"></i>
          </button>
          <button id="modal__v__vol" onClick={() => setMute(!mute)}>
            {mute ? (
              <i className="fas fa-volume-mute"></i>
            ) : (
              <i className="fas fa-volume-up"></i>
            )}
          </button>
        </div>
      </div>
      <div id="modal__sec__c">
        <div id="modal__genre">Genre: {mv.genre}</div>
        <div id="comment__title">Leave a comment below.</div>
      </div>
    </div>
  );
}
