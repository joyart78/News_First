import newsSlice from "../pages/News/newsSlice.js";
import { combineReducers } from "@reduxjs/toolkit";
import profileSlice from "../pages/Profile/profileSlice.js";

const rootReducer = combineReducers({
  posts: newsSlice,
  users: profileSlice,
});

export default rootReducer;
