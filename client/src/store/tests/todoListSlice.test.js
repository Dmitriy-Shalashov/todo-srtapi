import todoListsReducer, {
  addList,
  removeList,
  saveListTitle,
  clearStatusCode,
} from "../todoListsSlice";

const defaultState = {
  todoLists: [],
  lastAddListId: null,
  todoListTitle: null,
  statusCode: null,
  status: null,
  error: null,
};

const testStateForRemoveList = {
  todoLists: [
    {
      id: 1,
    },
  ],
};

const testSaveListTitle = {
  todoLists: [
    { title: "List1", id: 1 },
    { title: "List2", id: 2 },
  ],
};

describe("todoListsSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = todoListsReducer(undefined, { type: "" });

    expect(result).toEqual(defaultState);
  });

  it('should add new list with "addList" action', () => {
    const action = {
      type: addList.type,
      payload: { response: { id: 10, attributes: "test" }, status: 100 },
    };

    const result = todoListsReducer(defaultState, action);

    expect(result.todoLists[0]).toEqual({ id: 10, attributes: "test" });
    expect(result.statusCode).toBe(100);
    expect(result.lastAddListId).toBe(10);
  });

  it('should remove list with "removeList" action', () => {
    const action = { type: removeList.type, payload: { id: 1 } };

    const result = todoListsReducer(testStateForRemoveList, action);

    expect(result.todoLists).toEqual([]);
  });

  it('should save list title with "saveListTitle" action ', () => {
    const action = { type: saveListTitle.type, payload: 1 };

    const result = todoListsReducer(testSaveListTitle, action);

    expect(result.todoListTitle).toEqual({ title: "List1", id: 1 });
  });

  it('should clear statusCode with "clearStatusCode" with empty action', () => {
    const action = { type: clearStatusCode.type, payload: "" };
    const result = todoListsReducer({ statusCode: 200 }, action);
    expect(result.statusCode).toBe(null);
  });
});
