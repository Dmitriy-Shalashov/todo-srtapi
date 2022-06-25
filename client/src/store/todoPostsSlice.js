import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getAllPostsForList = createAsyncThunk(
  "todoPosts/getAllPostsForList",
  async function (id, { rejectWithValue }) {
    try {
      const response = await api.getOneTodoList(id);
      if (response.status === 404) {
        console.log("test");
        throw new Error("Server Error!");
      } else {
        console.log(response);
        return {
          title: response.attributes.title,
          posts: response.attributes.todo_items.data,
        };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deletePost = createAsyncThunk(
  "todoPosts/deletePost",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await api.deleteTodoItem(id);
      console.log(response);
      dispatch(removePost({ id }));
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

const todoPostsSlice = createSlice({
  name: "todoPosts",
  initialState: {
    todoPosts: {
      title: "",
      posts: [],
    },
  },

  reducers: {
    cleareState(state, action) {
      state.todoPosts = { title: "", posts: [] };
    },
    removePost(state, action) {
      state.todoPosts = state.todoPosts.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [getAllPostsForList.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getAllPostsForList.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todoPosts = action.payload;
    },
    [getAllPostsForList.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { cleareState, removePost } = todoPostsSlice.actions;
export default todoPostsSlice.reducer;
