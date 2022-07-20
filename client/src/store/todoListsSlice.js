import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getTodoLists = createAsyncThunk(
  "todoLists/getTodoLists",
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.getAllTodoLists();
      return response.response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createNewList = createAsyncThunk(
  "todoLists/addNewList",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const list = {
        title: text,
      };
      const response = await api.createTodoList(list);
      dispatch(addList(response));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteList = createAsyncThunk(
  "todoLists/deleteList",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      await api.deleteTodoList(id);
      dispatch(removeList({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: {
    todoLists: [],
    lastAddListId: null,
    todoListTitle: null,
    statusCode: null,
    status: null,
    error: null,
  },

  reducers: {
    addList(state, action) {
      state.todoLists.push(action.payload.response);
      state.statusCode = action.payload.status;
      state.lastAddListId = action.payload.response.id;
    },
    removeList(state, action) {
      state.todoLists = state.todoLists.filter(
        (list) => list.id !== action.payload.id
      );
    },
    saveListTitle(state, action) {
      state.todoListTitle = state.todoLists.find(
        (list) => list.id === +action.payload
      );
    },
    clearStatusCode(state, action) {
      state.statusCode = null;
    },
  },

  extraReducers: {
    [getTodoLists.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getTodoLists.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todoLists = action.payload;
    },
    [getTodoLists.rejected]: setError,
    [createNewList.rejected]: setError,
    [deleteList.rejected]: setError,
  },
});

export const { addList, removeList, saveListTitle, clearStatusCode } =
  todoListsSlice.actions;
export default todoListsSlice.reducer;
