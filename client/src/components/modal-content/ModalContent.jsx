import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearStatusCode } from "../../store/todoListsSlice";
import CreateNewPostForm from "../../common/create-post/CreateNewPostForm";
import CreateNewListForm from "../../common/create-list/CreateNewListForm";

const ModalContent = () => {
  const { statusCode, lastAddListId } = useSelector((state) => state.todoLists);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearStatusCode());
    };
  }, []);

  return (
    <>
      <div className="list">
        <h2>Create new list:</h2>
        <CreateNewListForm />
      </div>
      {statusCode && (
        <div className="post">
          <h2>Create new post for this list:</h2>
          <CreateNewPostForm listId={lastAddListId} />
        </div>
      )}
    </>
  );
};

export default ModalContent;
