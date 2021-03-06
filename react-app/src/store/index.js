import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import modalReducer from "./modal";
import mvReducer from "./mv";
import mvSearchReducer from "./mvsearch";
import commentReducer from "./comment";
import listReducer from "./list";

const rootReducer = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
  mv: mvReducer,
  mvSearch: mvSearchReducer,
  mvComments: commentReducer,
  userList: listReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
