import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as messages from "./messages"
import * as users from "./users"
import * as likes from "./likes"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    messages: combineReducers(messages),
    users: combineReducers(users),
    likes: combineReducers(likes)
  });
