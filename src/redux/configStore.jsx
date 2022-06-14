import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "./modules/loginSlice";
import signupReducer from "./modules/signupSlice";
import commentReducer from "./modules/commentSlice";
import postReducer from "./modules/postSlice";
import likeReducer from "./modules/likeSlice";

const middlewares = [thunk];
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  comment: commentReducer,
  post: postReducer,
  like: likeReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
