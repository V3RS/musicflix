import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { postComment } from "../../services/mv";
import "./CommentForm.css";
import { setCommentsRedux } from "../../store/comment";

// const labels = {
//   0.5: "eh",
//   1: "eh",
//   1.5: "Poor",
//   2: "Poor",
//   2.5: "Ok",
//   3: "Ok",
//   3.5: "Good",
//   4: "Good",
//   4.5: "Excellent",
//   5: "Excellent",
// };

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function CommentForm({ comForm, setComForm, setMV }) {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [hover, setHover] = React.useState(-1);

  const dispatch = useDispatch();

  const session = useSelector((state) => state.session.user);
  const mvId = useSelector((state) => state.mv.focusId);

  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setComForm(!comForm);
      dispatch(postComment(comment, rating, mvId, session.id));
    } else {
      alert("Pick a rating!");
    }
  };

  return (
    <div className="comment__form__c">
      <div className="indiv__com__c">
        <form onSubmit={handleSubmit}>
          <textarea
            id="textarea__com"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <div id="form__rating__c">
            <div className={classes.root}>
              <Rating
                name="hover-feedback"
                value={rating}
                // change precision back when update the database
                precision={1}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                // onChangeActive={(event, newHover) => {
                //   setHover(newHover);
                // }}
                required
              />
              {/* {rating !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>
              )} */}
            </div>
          </div>
          <button id="com__sub">
            {" "}
            <i className="fas fa-comment"></i> Comment
          </button>
        </form>
      </div>
    </div>
  );
}
