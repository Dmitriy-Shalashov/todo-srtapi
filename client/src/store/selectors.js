// selectors for Lists
export const selectAllLists = (state) => state.todoLists.todoLists;
export const selectListTitle = (state) => state.todoLists.todoListTitle;
export const selectStatuslists = (state) => state.todoLists;

// selectors for Posts
export const selectAllPosts = (state) => state.todoPosts.todoPosts;
export const selectStatusPosts = (state) => state.todoPosts;
