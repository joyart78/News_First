import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, fetchPosts } from "../../api/api.js";

export const postsAndUser = createSlice({
  name: "postsAndUser",
  initialState: { posts: [], user: [] },
  reducers: {
    load(state) {
      state.posts = fetchPosts();
      state.user = fetchUser();
    },
  },
});

export const { load } = postsAndUser.actions;

export default postsAndUser.reducer;
