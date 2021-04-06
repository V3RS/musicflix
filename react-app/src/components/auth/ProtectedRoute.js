import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  console.log("LLLLLL", props.authenticated);
  return (
    <Route {...props}>
      {props.authenticated ? props.children : <Redirect to="/" />}
    </Route>
  );
};

export default ProtectedRoute;
