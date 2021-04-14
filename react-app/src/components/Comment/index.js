import React from "react";
import CommentForm from "../CommentForm";

const propic =
  "https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFH0VbIGycnpOMaFT5ER1erOVKsxpCLYnZF0-sxIK15G0mY7z7RnNlEEiRFGOOBCJcyB2CEibnXtHsXwNqmcCGg-XlQ.png?r=9fe";

export default function Comment({
  rev,
  Avatar,
  session,
  dispatch,
  deleteComment,
  mvId,
}) {
  const [editComForm, setEditComForm] = React.useState(false);

  return editComForm ? (
    <div className="edit__comment__c" key={rev.id}>
      <CommentForm
        editRating={rev.rating}
        comForm={editComForm}
        setComForm={setEditComForm}
        editCom={rev.comment}
        rev={rev}
      />
    </div>
  ) : (
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
          <i
            className="fas fa-edit edit__btn"
            onClick={(e) => setEditComForm(!editComForm)}
          ></i>
          <i
            className="fas fa-trash-alt delete__btn"
            onClick={() => dispatch(deleteComment(rev.id, mvId))}
          ></i>
        </div>
      )}
      <div className="rev_rating_c">
        {rev.rating} <i className="fas fa-star"></i>
      </div>
      <div className="rev_comment_c">{rev.comment}</div>
    </div>
  );
}
