import { createSlice } from "@reduxjs/toolkit";

const todoPostsSlice = createSlice({
  name: "todoPosts",
  initialState: {
    todoPosts: [],
  },

  reducers: {},
  extraReducers: {},
});

export const {} = todoPostsSlice.actions;
export default todoPostsSlice.reducer;
