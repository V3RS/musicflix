const MODAL_OPEN_LOGIN = "loginModal/open";
const MODAL_CLOSE_LOGIN = "loginModal/close";
const MODAL_OPEN_SIGNUP = "signupModal/open";
const MODAL_CLOSE_SIGNUP = "signupModal/close";
const MODAL_OPEN_MV = "mvModal/open";
const MODAL_CLOSE_MV = "mvModal/close";

export const openLogin = () => {
  return {
    type: MODAL_OPEN_LOGIN,
  };
};

export const closeLogin = () => {
  return {
    type: MODAL_CLOSE_LOGIN,
  };
};

export const openSignup = () => {
  return {
    type: MODAL_OPEN_SIGNUP,
  };
};

export const closeSignup = () => {
  return {
    type: MODAL_CLOSE_SIGNUP,
  };
};

export const openMV = () => {
  return {
    type: MODAL_OPEN_MV,
  };
};

export const closeMV = () => {
  return {
    type: MODAL_CLOSE_MV,
  };
};

const initialState = {
  loginShow: false,
  signupShow: false,
  mvShow: false,
};

const modalReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case MODAL_OPEN_LOGIN:
      newState = Object.assign({}, state, { loginShow: true });
      return newState;
    case MODAL_CLOSE_LOGIN:
      newState = Object.assign({}, state, { loginShow: false });
      return newState;
    case MODAL_OPEN_SIGNUP:
      newState = Object.assign({}, state, { signupShow: true });
      return newState;
    case MODAL_CLOSE_SIGNUP:
      newState = Object.assign({}, state, { signupShow: false });
      return newState;
    case MODAL_OPEN_MV:
      newState = Object.assign({}, state, { mvShow: true });
      return newState;
    case MODAL_CLOSE_MV:
      newState = Object.assign({}, state, { mvShow: false });
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
