import React from "react";
// import { logout } from "../../services/auth";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    dispatch(sessionActions.logoutUser());
    setAuthenticated(false);
    setTimeout(() => {
      history.push("/");
    }, 200);
  };

  return (
    <div id="logout" onClick={onLogout}>
      Sign Out
    </div>
  );
};

export default LogoutButton;
