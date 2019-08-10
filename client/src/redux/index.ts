import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import ReduxThunk from "redux-thunk";
import demo from "./_demo";
import notification from "./_notification";

export const history = createBrowserHistory();

export const reducers = combineReducers({
  router: connectRouter(history),
  demo,
  notification
});

export const store = createStore(
  reducers,
  compose(applyMiddleware(routerMiddleware(history), ReduxThunk))
);
