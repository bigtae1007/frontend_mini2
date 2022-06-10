import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = configureStore({
  reducer: {
    // user: userReducer,
    // post: postReducer,
  },
  middleware: [...middlewares],
});

export default store;
