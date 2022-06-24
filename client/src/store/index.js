import { configureStore } from "@reduxjs/toolkit";
import todoListsReducer from "./todoListsSlice";

export default configureStore({
  reducer: {
    todoLists: todoListsReducer,
  },
});
