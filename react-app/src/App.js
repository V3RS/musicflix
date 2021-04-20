import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import * as sessionActions from "./store/session";
import { getList } from "./store/list";

import Splash from "./components/Splash";
import Browse from "./components/Browse";
import MusicVideoPage from "./components/MusicVideoPage";
import SearchPage from "./components/SearchPage";
import MyList from "./components/MyList";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getList(loggedInUser?.id));
  }, [loggedInUser]);

  useEffect(() => {
    (async () => {
      dispatch(sessionActions.restoreUser());
      const user = await authenticate();
      if (!user.errors) {
        dispatch(getList(user.id));
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
          path="/search"
          exact={true}
          authenticated={authenticated}
        >
          <Nav setAuthenticated={setAuthenticated} />
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute
          path="/mv/:mvId"
          exact={true}
          authenticated={authenticated}
        >
          <MusicVideoPage />
        </ProtectedRoute>
        <ProtectedRoute
          path="/list/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <Nav setAuthenticated={setAuthenticated} />
          <MyList />
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
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" authenticated={authenticated}>
          <Redirect to="/browse" />
        </ProtectedRoute>
        <Route path="/" authenticated={authenticated}>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
