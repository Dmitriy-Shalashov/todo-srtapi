import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/todoPostsSlice";
import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";

import PropTypes from "prop-types";

import styles from "./CreateNewPostForm.module.scss";

const CreateNewPostForm = ({ listId }) => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);
  //   const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //  text.trim().length ? setDisabled(false) : setDisabled(true);
  //  if (!text.trim().length) {
  //    setCompleted(false);
  //  }
  //   }, [text]);

  const disabledChecker = useMemo(
    () => (text.trim().length ? false : true),
    [text]
  );

  const newPost = {
    text: text,
    completed: completed,
    id: listId,
  };

  const handleClick = () => {
    dispatch(addNewPost(newPost));
    setText("");
    setCompleted(false);
  };

  const inputOnchange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleOnchange = useCallback(
    () => setCompleted(!completed),
    [completed]
  );

  return (
    <div className={styles["input-block"]}>
      <div className={styles["input-block__input"]}></div>
      <Input
        type="text"
        placeholder="Enter your task here"
        value={text}
        onChange={inputOnchange}
      />
      <div className={styles["input-block__btn"]}>
        <Checkbox
          completed={completed}
          onChange={handleOnchange}
          disabled={disabledChecker}
        />
        <Button option="add" onClick={handleClick} disabled={disabledChecker} />
      </div>
    </div>
  );
};

CreateNewPostForm.propTypes = {
  listId: PropTypes.string,
};

export default React.memo(CreateNewPostForm);
