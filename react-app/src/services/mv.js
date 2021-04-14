import { setComments } from "../store/comment";

export const getMVs = async () => {
  const res = await fetch(`/api/mv/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const postComment = (comment, rating, music_video_id, user_id) => async (
  dispatch
) => {
  const response = await fetch("/api/reviews/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      rating,
      music_video_id,
      user_id,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.reviews));
  return data;
};

export const editComment = (comment, rating, id, mv_id) => async (dispatch) => {
  const response = await fetch("/api/reviews/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      rating,
      id,
      mv_id,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.reviews));
  return data;
};

export const deleteComment = (id, mv_id) => async (dispatch) => {
  const response = await fetch("/api/reviews/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      mv_id,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.reviews));
  return data;
};
