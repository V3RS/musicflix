import { getMVs } from "../services/mv";

const GET_MVS = "musicVideo/get";
const SET_FOCUS = "musicVideo/set";

const setMVs = (mv) => ({
  type: GET_MVS,
  mv,
});

const setFocusMvId = (focusId) => ({
  type: SET_FOCUS,
  focusId,
});

export const getMusicVideos = () => async (dispatch) => {
  const mvs = await getMVs();
  dispatch(setMVs(mvs));
  return mvs;
};

export const setFocusId = (focusId) => async (dispatch) => {
  dispatch(setFocusMvId(focusId));
  return focusId;
};

const mvReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_MVS:
      newState = Object.assign({}, state, action.mv);
      return newState;
    case SET_FOCUS:
      newState = Object.assign({}, state, { focusId: action.focusId });
      return newState;
    default:
      return state;
  }
};

export default mvReducer;
