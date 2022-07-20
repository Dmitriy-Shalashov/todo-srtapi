import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/todoListsSlice";
import Button from "../button/Button";

import PropTypes from "prop-types";

import styles from "./ListItem.module.scss";

const ListItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const handleDeleteList = useCallback(
    (e) => {
      e.preventDefault();
      return dispatch(deleteList(id));
    },
    [dispatch, id]
  );

  return (
    <div className={styles["list-item"]}>
      <h3 className={styles["list-item__title"]}>{title}</h3>
      <Button option="del" onClick={handleDeleteList} />
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};

export default React.memo(ListItem);
