import { login, authenticate, demoLogin, logout } from "../services/auth";

const LOGIN = "session/login";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => ({
  type: LOGIN,
  user,
});

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  const user = await login(email, password);
  if (user) {
    dispatch(setUser(user));
    return user;
  }
};

export const demoLoginUser = () => async (dispatch) => {
  const user = await demoLogin();
  if (user) {
    dispatch(setUser(user));
    return user;
  }
};

export const restoreUser = () => async (dispatch) => {
  const user = await authenticate();
  dispatch(setUser(user));
  return user;
};

export const logoutUser = () => async (dispatch) => {
  await logout();
  dispatch(removeUser());
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN:
      newState = Object.assign({}, state, {
        user: action.user,
      });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
