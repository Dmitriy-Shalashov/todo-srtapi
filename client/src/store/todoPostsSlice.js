import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getAllPostsForList = createAsyncThunk(
  "todoPosts/getAllPostsForList",
  async function (id, { rejectWithValue }) {
    try {
      const response = await api.getOneTodoList(id);
      if (response.status === 404) {
        throw new Error("Server Error!");
      } else {
        return {
          title: response.response.attributes.title,
          posts: response.response.attributes.todo_items.data,
          listId: response.response.id,
        };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "todoPosts/addNewPost",
  async function (postData, { rejectWithValue, dispatch }) {
    const { text, id } = postData;
    try {
      const post = {
        title: text,
        todo_list: id,
      };
      const response = await api.createToDoItem(post);
      dispatch(addPost(response.response));
    } catch (error) {
      return rejectWithValue(error.message);
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
      listId: null,
    },
  },

  reducers: {
    addPost(state, action) {
      state.todoPosts.posts.push(action.payload);
    },
    removePost(state, action) {
      state.todoPosts.posts = state.todoPosts.posts.filter(
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

export const { removePost, addPost } = todoPostsSlice.actions;
export default todoPostsSlice.reducer;
