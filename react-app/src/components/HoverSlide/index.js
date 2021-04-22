import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { openMV, closeMV } from "../../store/modal";
import { postList, deleteList } from "../../store/list";
import { useHistory } from "react-router-dom";
import { setFocusId } from "../../store/mv";

import "./HoverSlide.css";

export default function HoverSlide({ mv, wid }) {
  const [mute, setMute] = useState(true);
  const [inList, setInList] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const userList = useSelector((state) => state.userList);

  useEffect(() => {
    setInList(false);
    userList.forEach((musicVid) => {
      if (musicVid.id === mv.id) setInList(true);
    });
  }, [userList, mv]);

  const addToList = () => dispatch(postList(mv.id, user.id));
  const deleteFromList = () => dispatch(deleteList(mv.id, user.id));

  return (
    <div className="hover__slide__c">
      <div className="h__slide__c">
        <ReactPlayer
          className="react-player2"
          url={mv?.video_url}
          width={"400px"}
          height="270px"
          playing={true}
          controls={false}
          muted={mute}
          loop={true}
        />
        <button id="hover__mute" onClick={() => setMute(!mute)}>
          {mute ? (
            <i className="fas fa-volume-mute"></i>
          ) : (
            <i className="fas fa-volume-up"></i>
          )}
        </button>
        <div className="hover__info">
          <h1 id="hover__title">{mv?.title}</h1>
          <h3 id="hover__artist">{mv?.artist}</h3>
          <button
            id="hover__play"
            onClick={() => {
              history.push(`/mv/${mv?.id}`);
            }}
          >
            <i className="fas fa-play"></i>
          </button>
          <button
            id="hover__add"
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
