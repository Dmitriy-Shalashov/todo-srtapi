import { configureStore } from "@reduxjs/toolkit";
import todoListsReducer from "./todoListsSlice";
import todoPostsReducer from "./todoPostsSlice";

export default configureStore({
  reducer: {
    todoLists: todoListsReducer,
    todoPosts: todoPostsReducer,
  },
});
