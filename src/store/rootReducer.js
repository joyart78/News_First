import newsSlice from "../pages/News/newsSlice.js";
import { combineReducers } from "@reduxjs/toolkit";
import profileSlice from "../pages/Profile/profileSlice.js";
import InputSlice from "../pages/Exchange/InputSlice.js";

const rootReducer = combineReducers({
  posts: newsSlice,
  users: profileSlice,
  input: InputSlice,
});

export default rootReducer;
