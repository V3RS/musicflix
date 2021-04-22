import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import ContentSlider from "./ContentSlider";
import { getMusicVideos, setFocusId } from "../../store/mv";
import { postList, deleteList } from "../../store/list";
import "./Browse.css";
import MVModal from "../MVModal";
import { openMV } from "../../store/modal";
import CircularProgress from "@material-ui/core/CircularProgress";
import { prevVideo } from "./prevVideo";

export default function Browse() {
  const [mute, setMute] = useState(true);
  const [num, setNum] = useState(0);
  const [inList, setInList] = useState(false);
  const [trending, setTrending] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const user = useSelector((state) => state.session.user);
  const userList = useSelector((state) => state.userList);

  const addToList = () => dispatch(postList(num + 1, user.id));
  const deleteFromList = () => dispatch(deleteList(num + 1, user.id));

  useEffect(() => {
    setInList(false);
    userList.forEach((mv) => {
      if (mv.id === num + 1) setInList(true);
    });
  }, [userList, num]);

  useEffect(() => {
    dispatch(getMusicVideos());
    setNum(prevVideo[Math.floor(Math.random() * prevVideo.length)]);
  }, [dispatch]);
  // trending
  const mvState = useSelector((state) => state.modal.mvShow);
  const mv = useSelector((state) => state.mv);
  const all = mv.all;
  const pop = mv.pop;
  const rap = mv.rap;
  const rock = mv.rock;

  // trend will be changed when a like system exists for now it will be randomized
  useEffect(() => {
    const trend = new Array();
    for (let i = 0; i < 21; i++) {
      trend.push(all ? all[getRandomInt(63)] : {});
    }
    setTrending(trend);
  }, [mv.all]);

  return all ? (
    <div className="browse__container">
      <MVModal mv={all ? all[num] : {}} />
      <div className="preview__video__container">
        <ReactPlayer
          className="react-player"
          url={all ? all[num]?.video_url : ""}
          // ids that are full screen , 31, 32, 34, 35, 36,
          // 38, 39, 41, 48 ,51, 52, 57, 58,
          width="100vw"
          height="108vh"
          playing={mvState ? false : true}
          controls={false}
          muted={mute}
          loop={true}
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
            },
          }}
        />
        <div id="prev__video__info">
          <div id="prev__video__title__container">
            <h1>{all ? all[num]?.title : ""}</h1>
            <h3 id="prev__vid__artist">{all ? all[num]?.artist : ""}</h3>
          </div>
          <div id="prev__video__btns">
            <button
              id="prev__v__play"
              onClick={() => history.push(`/mv/${all ? all[num].id : 1}`)}
            >
              <i className="ic fas fa-play"></i>
              Play
            </button>
            <button
              id="prev__v__info"
              onClick={() => {
                dispatch(setFocusId(all ? all[num]?.id : 1));
                dispatch(openMV());
              }}
            >
              <i className="ic fas fa-info-circle"></i>More Info
            </button>
            <button
              id="mv__hover__add__browse"
              onClick={
                inList
                  ? () => {
                      deleteFromList();
                      setInList(false);
                    }
                  : addToList
              }
            >
              {inList ? (
                <i class="fas fa-minus"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}
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
              onClick={() =>
                setNum(prevVideo[Math.floor(Math.random() * prevVideo.length)])
              }
            >
              <i className="fas fa-random"></i>
            </button>
          </div>
        </div>
      </div>
      {mv && (
        <>
          <div className="sliders__c">
            <ContentSlider title={"Trending Now"} mvs={trending} />
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
  ) : (
    <div className="loading">
      <CircularProgress size="200px" />
    </div>
  );
}
