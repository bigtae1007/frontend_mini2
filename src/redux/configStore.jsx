import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "./modules/loginSlice";
import signupReducer from "./modules/signupSlice";
import commentReducer from "./modules/commentSlice";
import postReducer from "./modules/postSlice";

const middlewares = [thunk];
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  comment: commentReducer,
  post: postReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
