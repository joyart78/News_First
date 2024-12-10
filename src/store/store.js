import { configureStore } from "@reduxjs/toolkit";
import postsAndUser from "./Slices/postsAndUser.js";
import rootReducer from "./rootReducer.js";

export default configureStore({
  reducer: rootReducer,
});
