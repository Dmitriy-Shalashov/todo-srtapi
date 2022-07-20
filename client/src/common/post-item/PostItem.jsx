import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletePost, toggleStatus } from "../../store/todoPostsSlice";
import cn from "classnames";

import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";

import PropTypes from "prop-types";
import styles from "./PostItem.module.scss";

const PostItem = ({ title, id, completed }) => {
  const dispatch = useDispatch();

  const handleDeletePost = (e) => {
    e.preventDefault();
    return dispatch(deletePost(id));
  };

  const toogleStatus = useCallback(
    () => dispatch(toggleStatus(id)),
    [dispatch, id]
  );

  return (
    <div
      className={cn(styles["post-item"], {
        [styles.completed]: completed,
      })}
    >
      <h3 className={styles["post-item__title"]}>{title}</h3>
      <div className={styles["post-item__control"]}>
        <Checkbox completed={completed} onChange={toogleStatus} />
        <Button option="del" onClick={handleDeletePost} />
      </div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
};

export default React.memo(PostItem);
// export default PostItem;
