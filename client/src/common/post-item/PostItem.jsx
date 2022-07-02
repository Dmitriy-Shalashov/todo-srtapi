import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, toggleStatus } from "../../store/todoPostsSlice";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import "./postItem.scss";

const PostItem = ({ title, id, completed }) => {
  const dispatch = useDispatch();

  const handlyDeletePost = (e) => {
    e.preventDefault();
    return dispatch(deletePost(id));
  };

  return (
    <div className="post-item">
      <h3 className="post-item__title">{title}</h3>
      <div className="post-item__control">
        <Checkbox
          type="checkbox"
          completed={completed}
          onChange={() => dispatch(toggleStatus(id))}
        />
        <Button type="del" onClick={handlyDeletePost} />
      </div>
    </div>
  );
};

export default PostItem;
