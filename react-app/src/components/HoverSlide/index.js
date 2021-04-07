import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch } from "react-redux";
import { openMV, closeMV } from "../../store/modal";
import { useHistory } from "react-router-dom";
import { setFocusId } from "../../store/mv";

import "./HoverSlide.css";

export default function HoverSlide({ mv, wid }) {
  const [mute, setMute] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div
      className="hover__slide__c"
      onClick={() => {
        dispatch(setFocusId(mv?.id));
        dispatch(openMV());
      }}
    >
      <div className="h__slide__c">
        {/* <div className="hover__vid__c"> */}
        <ReactPlayer
          className="react-player2"
          url={mv?.video_url}
          width={wid ? "400px" : "350px"}
          height="270px"
          playing={true}
          controls={false}
          muted={mute}
          loop={true}
        />
        {/* </div> */}
        <div className="hover__info">
          <h1 id="hover__title">{mv?.title}</h1>
          <h3 id="hover__artist">{mv?.artist}</h3>
          <button id="hover__mute" onClick={() => setMute(!mute)}>
            {mute ? (
              <i className="fas fa-volume-mute"></i>
            ) : (
              <i className="fas fa-volume-up"></i>
            )}
          </button>
          <button
            id="hover__play"
            onClick={() => {
              history.push(`/mv/${mv?.id}`);
              dispatch(closeMV());
            }}
          >
            <i className="fas fa-play"></i>
          </button>
          <button id="hover__add">
            <i className="fas fa-plus"></i>
          </button>
          <button
            id="hover__info"
            onClick={() => {
              dispatch(setFocusId(mv?.id));
              dispatch(openMV());
            }}
          >
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
