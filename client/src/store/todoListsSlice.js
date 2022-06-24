import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getTodoLists = createAsyncThunk(
  "todoLists/getTodoLists",
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.getAllTodoLists();
      if (response.status === 404) {
        console.log("test");
        throw new Error("Server Error!");
      } else {
        return response;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
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
      const response = await api.deleteTodoList(id);
      console.log(response);
      dispatch(removeList({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: {
    todoLists: [],
    todoListTitle: null,
  },

  reducers: {
    addList(state, action) {
      state.todoLists.push(action.payload);
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
    [getTodoLists.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addList, removeList, saveListTitle } = todoListsSlice.actions;
export default todoListsSlice.reducer;
