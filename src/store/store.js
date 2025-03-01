import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";

export default configureStore({
  reducer: rootReducer,
});
