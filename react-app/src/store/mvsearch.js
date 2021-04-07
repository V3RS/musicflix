const MVLIST_Q = "mvList/query";

const mvSearchQuery = (mvList) => {
  return {
    type: MVLIST_Q,
    mvList,
  };
};

export const mvSearch = (searchQuery) => async (dispatch) => {
  const res = await fetch("/api/mv/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: searchQuery,
  });
  const data = await res.json();
  dispatch(mvSearchQuery(data));
};

const mvSearchReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case MVLIST_Q:
      newState = Object.assign({}, state, action.mvList);
      return newState;
    default:
      return state;
  }
};

export default mvSearchReducer;
