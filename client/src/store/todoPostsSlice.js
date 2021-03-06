import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getAllPostsForList = createAsyncThunk(
  "todoPosts/getAllPostsForList",
  async function (id, { rejectWithValue }) {
    try {
      const response = await api.getOneTodoList(id);
      return {
        listTitle: response.response.attributes.title,
        posts: response.response.attributes.todo_items.data,
        listId: response.response.id,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "todoPosts/addNewPost",
  async function (postData, { rejectWithValue, dispatch }) {
    const { text, id, completed } = postData;
    try {
      const post = {
        title: text,
        completed: completed,
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

export const toggleStatus = createAsyncThunk(
  "todoPosts/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const post = getState().todoPosts.todoPosts.posts.find(
      (post) => post.id === id
    );
    try {
      const params = { completed: !post.attributes.completed };
      const response = await api.updateTodoItem(id, params);
      console.log(response);
      dispatch(togglePostComplete({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoPostsSlice = createSlice({
  name: "todoPosts",
  initialState: {
    todoPosts: {
      listTitle: "",
      posts: [],
      listId: null,
    },
    status: null,
    error: null,
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
    togglePostComplete(state, action) {
      const togglePost = state.todoPosts.posts.find(
        (post) => post.id === action.payload.id
      );
      togglePost.attributes.completed = !togglePost.attributes.completed;
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
    [getAllPostsForList.rejected]: setError,
    [addNewPost.rejected]: setError,
    [deletePost.rejected]: setError,
    [toggleStatus.rejected]: setError,
  },
});

export const { removePost, addPost, togglePostComplete } =
  todoPostsSlice.actions;
export default todoPostsSlice.reducer;
