import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeMV } from "../../store/modal";
import Avatar from "@material-ui/core/Avatar";
import "./MV.css";

export default function MV() {
  const [mv, setMV] = useState({});
  const [mute, setMute] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const mvId = useSelector((state) => state.mv.focusId);

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

  const reviews = mv?.reviews;
  // console.log(reviews);
  const propic =
    "https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFH0VbIGycnpOMaFT5ER1erOVKsxpCLYnZF0-sxIK15G0mY7z7RnNlEEiRFGOOBCJcyB2CEibnXtHsXwNqmcCGg-XlQ.png?r=9fe";

  return (
    <div id="modal__mv__c">
      <button className="mv__close__modal" onClick={() => dispatch(closeMV())}>
        <i className="fas fa-times"></i>
      </button>
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
            onClick={() => {
              history.push(`/mv/${mv?.id}`);
              dispatch(closeMV());
            }}
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
        <div id="comment__content__c">
          {reviews &&
            reviews?.map((rev) => (
              <div key={rev.id} className="indiv__com__c">
                <Avatar
                  className="rev__pro"
                  variant="square"
                  src={propic}
                  alt="reviewer pic"
                />
                <div className="rev_un_c">{rev.user.username}</div>
                <div className="rev_rating_c">
                  {rev.rating} <i className="fas fa-star"></i>
                </div>
                <div className="rev_comment_c">{rev.comment}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
