import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import ContentSlider from "./ContentSlider";
import { getMusicVideos } from "../../store/mv";
import "./Browse.css";

export default function Browse() {
  const [mute, setMute] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusicVideos());
  }, [dispatch]);

  const mv = useSelector((state) => state.mv);
  const all = mv.all;
  const pop = mv.pop;
  const rap = mv.rap;
  const rock = mv.rock;

  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const num = getRandomInt(62);

  return (
    <div className="browse__container">
      <div className="preview__video__container">
        <ReactPlayer
          className="react-player"
          url={all ? all[num].video_url : ""}
          // url="https://www.youtube.com/watch?v=pvuN_WvF1to&ab_channel=LilDicky"
          width="100vw"
          height="108vh"
          playing={true}
          controls={false}
          muted={mute}
          loop={true}
        />
        <div id="prev__video__info">
          <div id="prev__video__title__container">
            {/* <h1>Earth</h1> */}
            <h1>{all ? all[num]?.title : ""}</h1>
            {/* <h3 id="prev__vid__artist">Lil Dicky</h3> */}
            <h3 id="prev__vid__artist">{all ? all[num]?.artist : ""}</h3>
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
      {mv && (
        <>
          <div className="sliders__c">
            <ContentSlider title={"Trending Now"} mvs={rap} />
          </div>
          <div className="sliders__c">
            <ContentSlider title={"Pop"} mvs={pop} />
          </div>
          <div className="sliders__c">
            <ContentSlider title={"Rap"} mvs={rap} />
          </div>
          <div className="sliders__c">
            <ContentSlider title={"Rock"} mvs={rock} />
          </div>
        </>
      )}
    </div>
  );
}
