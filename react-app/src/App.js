import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import * as sessionActions from "./store/session";

import Splash from "./components/Splash";
import Browse from "./components/Browse";
import MusicVideoPage from "./components/MusicVideoPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(sessionActions.restoreUser());
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute
          path="/browse"
          exact={true}
          authenticated={authenticated}
        >
          <Nav setAuthenticated={setAuthenticated} />
          <Browse />
        </ProtectedRoute>
        <ProtectedRoute
          path="/mv/:mvId"
          exact={true}
          // authenticated={authenticated}
        >
          <Nav setAuthenticated={setAuthenticated} />
          <MusicVideoPage />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
