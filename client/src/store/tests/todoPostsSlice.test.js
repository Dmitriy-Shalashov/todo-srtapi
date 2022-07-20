import todoPostsReducer, {
  addPost,
  removePost,
  togglePostComplete,
} from "../todoPostsSlice";

const defaultState = {
  todoPosts: {
    posts: [],
    listId: null,
    listTitle: "",
  },
  status: null,
  error: null,
};

const testStateForRemovePost = {
  todoPosts: {
    posts: [
      {
        attributes: { title: 123, completed: true },
        id: 10,
      },
    ],
  },
};

describe("todoPostsSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = todoPostsReducer(undefined, { type: "" });

    expect(result).toEqual(defaultState);
  });

  it('should add new post with "addPost" action', () => {
    const action = {
      type: addPost.type,
      payload: { attributes: { title: 123, completed: true }, id: 10 },
    };

    const result = todoPostsReducer(defaultState, action);

    expect(result.todoPosts.posts[0]).toEqual({
      attributes: {
        title: 123,
        completed: true,
      },
      id: 10,
    });
  });

  it('should remove post with "remomvePost" action ', () => {
    const action = { type: removePost.type, payload: { id: 10 } };

    const result = todoPostsReducer(testStateForRemovePost, action);

    expect(result.todoPosts.posts).toEqual([]);
  });
});

it('should toggle post with "togglePostComplete" action', () => {
  const action = { type: togglePostComplete.type, payload: { id: 10 } };

  const result = todoPostsReducer(testStateForRemovePost, action);

  expect(result.todoPosts.posts[0].attributes.completed).toBe(false);
});
