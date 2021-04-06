import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import MVModal from "../MVModal";
import { openMV } from "../../store/modal";
import { setFocusId } from "../../store/mv";
import "./MusicVideoPage.css";

export default function MusicVideoPage() {
  const [mv, setMV] = useState({});
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(true);
  const [hover, setHover] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const mvState = useSelector((state) => state.modal.mvShow);

  const { mvId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/mv/${mvId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMV(data);
    };
    fetchData();
  }, [mvId]);

  return (
    <div
      className="mv__c"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <MVModal />
      <div className="preview__video__container">
        <ReactPlayer
          className="react-player"
          url={mv?.video_url}
          width="100vw"
          height="100vh"
          playing={play && !mvState ? true : false}
          controls={true}
          muted={mute}
          loop={true}
        />
        {hover && (
          <div id="mv__video__information">
            <button id="back" onClick={() => history.push("/browse")}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <div id="prev__video__title__container">
              <h1>{mv?.title}</h1>
              <h3 id="prev__vid__artist">{mv?.artist}</h3>
            </div>
            <div id="prev__video__btns">
              <button id="prev__v__play" onClick={() => setPlay(!play)}>
                {play ? (
                  <i className="ic fas fa-pause"></i>
                ) : (
                  <i className="ic fas fa-play"></i>
                )}
                {play ? "Pause" : "Play"}
              </button>
              <button
                id="prev__v__info"
                onClick={() => {
                  dispatch(setFocusId(mv?.id));
                  dispatch(openMV());
                }}
              >
                <i className="ic fas fa-info-circle"></i>More Info
              </button>
              <button id="prev__v__vol" onClick={() => setMute(!mute)}>
                {mute ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
              <button
                id="prev__v__shuffle"
                onClick={() => history.push(`/mv/${getRandomInt(64)}`)}
              >
                <i className="fas fa-random"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
