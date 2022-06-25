import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/todoPostsSlice";
import Button from "../button/Button";
import "./postItem.scss";

const PostItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const handlyDeletePost = (e) => {
    e.preventDefault();
    return dispatch(deletePost(id));
  };

  return (
    <div className="post-item">
      <h3 className="post-item__title">{title}</h3>
      <div className="post-item__control">
        <input type="checkbox" onChange={() => console.log("change")} />
        <Button type="del" onClick={handlyDeletePost} />
      </div>
    </div>
  );
};

export default PostItem;
