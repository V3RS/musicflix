import React from "react";
// import { logout } from "../../services/auth";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    dispatch(sessionActions.logoutUser());
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
