import axiosClient from "./axiosClient";

const api = {
  getAllTodoLists: () => {
    const url = "todo-lists?fields=title";
    return axiosClient.get(url);
  },
  getOneTodoList: (id) => {
    const url = `todo-lists/${id}?populate=*`;
    return axiosClient.get(url);
  },
  createTodoList: (body) => {
    const url = "todo-lists";
    return axiosClient.post(url, { data: body });
  },
  createToDoItem: (body) => {
    const url = "todo-items";
    return axiosClient.post(url, { data: body });
  },
  updateTodoList: (id, body) => {
    const url = `todo-items/${id}`;
    return axiosClient.post(url, { data: body });
  },
  updateTodoItem: (id, body) => {
    const url = `todo-items/${id}`;
    return axiosClient.put(url, { data: body });
  },
  deleteTodoList: (id) => {
    const url = `todo-lists/${id}`;
    return axiosClient.delete(url);
  },
  deleteTodoItem: (id) => {
    const url = `todo-items/${id}`;
    return axiosClient.delete(url);
  },
};

export default api;
