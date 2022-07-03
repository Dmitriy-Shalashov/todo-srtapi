import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, toggleStatus } from "../../store/todoPostsSlice";
import classNames from "classnames";

import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";

import PropTypes from "prop-types";
import "./postItem.scss";

const PostItem = ({ title, id, completed }) => {
  const dispatch = useDispatch();

  const handlyDeletePost = (e) => {
    e.preventDefault();
    return dispatch(deletePost(id));
  };

  return (
    <div
      className={classNames("post-item", {
        completed: completed,
      })}
    >
      <h3 className="post-item__title">{title}</h3>
      <div className="post-item__control">
        <Checkbox
          completed={completed}
          onChange={() => dispatch(toggleStatus(id))}
        />
        <Button type="del" onClick={handlyDeletePost} />
      </div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
};

export default PostItem;
