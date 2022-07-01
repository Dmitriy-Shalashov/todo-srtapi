import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewList } from "../../store/todoListsSlice";
import Input from "../input/Input";
import Button from "../button/Button";

import "./createNewListForm.scss";

const CreateNewListForm = () => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  const dispath = useDispatch();

  useEffect(() => {
    text ? setDisabled(false) : setDisabled(true);
  }, [text]);

  return (
    <div className="input-block">
      <div className="input-block__input"></div>
      <Input
        type="text"
        placeholder="Enter new List name"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <div className="input-block__btn">
        <Button
          type="add"
          onClick={() => dispath(createNewList(text))}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CreateNewListForm;
