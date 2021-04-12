import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeMV } from "../../store/modal";
import Avatar from "@material-ui/core/Avatar";
import "./MV.css";
import CommentForm from "../CommentForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import { setCommentsRedux } from "../../store/comment";
import { deleteComment } from "../../services/mv";
import { mvSearch } from "../../store/mvsearch";

export default function MV() {
  const [mv, setMV] = useState({});
  const [mute, setMute] = useState(true);
  const [comForm, setComForm] = useState(false);
  // const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const mvId = useSelector((state) => state.mv.focusId);
  let comments = useSelector((state) => state.mvComments);
  const session = useSelector((state) => state.session.user);
  // setComments(commentsRedux);

  // console.log("LLLLL", comments);
  comments &&
    comments.sort((a, b) => {
      return b.id - a.id; //this will sort according to .id descending
    });
  // console.log("RRRRRRR", comments);

  const comContainer = useRef();

  if (comForm) {
    comContainer.current && comContainer.current.classList.add("form__show");
  } else {
    comContainer.current && comContainer.current.classList.remove("form__show");
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/mv/${mvId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMV(data);
      dispatch(setCommentsRedux(data.reviews));
    };
    fetchData();
  }, [mvId, dispatch]);

  let rating = 0;
  comments &&
    comments.forEach((comment) => {
      rating += comment.rating;
    });

  comments && (rating /= comments.length);

  // console.log(reviews);
  const propic =
    "https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFH0VbIGycnpOMaFT5ER1erOVKsxpCLYnZF0-sxIK15G0mY7z7RnNlEEiRFGOOBCJcyB2CEibnXtHsXwNqmcCGg-XlQ.png?r=9fe";

  return comments ? (
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
        <div id="modal__genre">
          Genre:{" "}
          <span
            id="click__genre"
            onClick={() => {
              // still searches for songs with genre in it
              //  have to write new search route for just genre
              dispatch(mvSearch(mv.genre));
              dispatch(closeMV());
              history.push("/search");
            }}
          >
            {mv.genre}
          </span>
        </div>
        <div id="modal__rating">
          {rating.toFixed(1)} <i className="fas fa-star"></i>
        </div>
        <button id="add__c__btn" onClick={() => setComForm(!comForm)}>
          {comForm ? (
            "Close form"
          ) : (
            <span>
              <i className="fas fa-comment"></i> Add a comment
            </span>
          )}
        </button>
        {comForm && (
          <CommentForm
            setMV={setMV}
            comForm={comForm}
            setComForm={setComForm}
          />
        )}
        <div className="comment__content__c" ref={comContainer}>
          {comments &&
            comments.map((rev) => (
              <div key={rev.id} className="indiv__com__c">
                <Avatar
                  className="rev__pro"
                  variant="square"
                  src={propic}
                  alt="reviewer pic"
                />
                <div className="rev_un_c">{rev.user.username}</div>
                {session.id === rev.user.id && (
                  <div className="edit__delete__c">
                    <button className="edit__btn">
                      <i className="fas fa-edit"></i>
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteComment(rev.id, mvId))}
                      className="delete__btn"
                    >
                      <i className="fas fa-trash-alt"></i>
                      Delete
                    </button>
                  </div>
                )}
                <div className="rev_rating_c">
                  {rev.rating} <i className="fas fa-star"></i>
                </div>
                <div className="rev_comment_c">{rev.comment}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="modal__loading">
      <CircularProgress size="200px" />
    </div>
  );
}
