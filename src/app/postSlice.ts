import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostsList, PostType } from "../data/PostsList";

const initialState: Array<PostType> =
  JSON.parse(localStorage.getItem("postList")!) || PostsList;

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
