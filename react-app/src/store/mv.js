import { getMVs } from "../services/mv";

const GET_MVS = "musicVideo/get";

const setMVs = (mv) => ({
  type: GET_MVS,
  mv,
});

export const getMusicVideos = () => async (dispatch) => {
  const mvs = await getMVs();
  dispatch(setMVs(mvs));
  return mvs;
};

const mvReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_MVS:
      newState = Object.assign({}, state, action.mv);
      return newState;
    default:
      return state;
  }
};

export default mvReducer;
