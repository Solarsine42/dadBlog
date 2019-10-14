import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import commentsReducer from "./comments/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
