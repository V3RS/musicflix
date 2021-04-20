const SET_LIST = "list/set";

export const setList = (myList) => {
  return {
    type: SET_LIST,
    myList,
  };
};

export const getList = (user_id) => async (dispatch) => {
  const response = await fetch(`/api/list/get/${user_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  dispatch(setList(data.list));
  return data;
};

export const postList = (music_video_id, user_id) => async (dispatch) => {
  const response = await fetch("/api/list/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      music_video_id,
      user_id,
    }),
  });
  const data = await response.json();
  dispatch(setList(data.list));
  return data;
};

export const deleteList = (music_video_id, user_id) => async (dispatch) => {
  const response = await fetch("/api/list/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      music_video_id,
      user_id,
    }),
  });
  const data = await response.json();
  dispatch(setList(data.list));
  return data;
};

const listReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SET_LIST:
      newState = action.myList;
      return newState;
    default:
      return state;
  }
};

export default listReducer;
