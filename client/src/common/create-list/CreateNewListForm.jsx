import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewList } from "../../store/todoListsSlice";
import Input from "../input/Input";
import Button from "../button/Button";

import styles from "./CreateNewListForm.module.scss";

const CreateNewListForm = () => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  const dispath = useDispatch();

  useEffect(() => {
    text.trim().length ? setDisabled(false) : setDisabled(true);
  }, [text]);

  useEffect(() => {
    return () => {
      setText("");
    };
  }, []);

  return (
    <div className={styles["input-block"]}>
      <Input
        type="text"
        placeholder="Enter new List name"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className={styles["input-block__btn"]}>
        <Button
          option="add"
          onClick={() => dispath(createNewList(text))}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CreateNewListForm;
