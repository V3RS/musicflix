import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import MVModal from "../MVModal";
import { openMV, closeMV } from "../../store/modal";
import { postList, deleteList } from "../../store/list";
import { setFocusId } from "../../store/mv";
import "./MusicVideoPage.css";

export default function MusicVideoPage() {
  const [mv, setMV] = useState({});
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(true);
  const [inList, setInList] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const mvState = useSelector((state) => state.modal.mvShow);
  const user = useSelector((state) => state.session.user);
  const userList = useSelector((state) => state.userList);

  const { mvId } = useParams();
  const addToList = () => dispatch(postList(mvId, user.id));
  const deleteFromList = () => dispatch(deleteList(mvId, user.id));
  const hover = useRef();

  useEffect(() => {
    setInList(false);
    userList.forEach((mv) => {
      if (`${mv.id}` === mvId) setInList(true);
    });
  }, [userList, mvId]);

  useEffect(() => {
    hover.current && hover.current.classList.add("mv__video__hover");
    setTimeout(() => {
      hover.current && hover.current.classList.remove("mv__video__hover");
    }, 3000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      hover.current && hover.current.classList.add("mv__video__hover");
    }, 5000);
  });

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

  useEffect(() => {
    dispatch(closeMV());
  }, []);

  return (
    <div
      className="mv__c"
      onMouseMove={() => {
        hover.current && hover.current.classList.remove("mv__video__hover");
      }}
      // onMouseEnter={() => {
      //   hover.current && hover.current.classList.remove("mv__video__hover");
      // }}
      onMouseLeave={() => {
        hover.current && hover.current.classList.add("mv__video__hover");
      }}
      // onClick={() =>
      //   hover.current && hover.current.classList.remove("mv__video__hover")
      // }
    >
      <MVModal />
      <div className="preview__video__container">
        <ReactPlayer
          className="react-player4"
          url={mv?.video_url}
          width="100vw"
          height="100vh"
          playing={play && !mvState ? true : false}
          controls={false}
          muted={mute}
          loop={true}
        />
        <div className="mv__video__information" ref={hover}>
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
            <button
              id="mv__hover__add"
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
            <button id="mv__v__vol" onClick={() => setMute(!mute)}>
              {mute ? (
                <i className="fas fa-volume-mute"></i>
              ) : (
                <i className="fas fa-volume-up"></i>
              )}
            </button>
            <button
              id="mv__v__shuffle"
              onClick={() => history.push(`/mv/${getRandomInt(63)}`)}
            >
              <i className="fas fa-random"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
