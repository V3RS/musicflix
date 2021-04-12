const SET_COMMENTS = "comments/set";
const ADD_COMMENT = "comments/add";

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

export const setCommentsRedux = (comments) => async (dispatch) => {
  dispatch(setComments(comments));
  return comments;
};

const commentReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SET_COMMENTS:
      newState = action.comments;
      return newState;
    // case ADD_COMMENT:
    //   newState = state;
    //   newState.unshift(action.comment);
    //   return newState;
    default:
      return state;
  }
};
export default commentReducer;
