import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/todoPostsSlice";
import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import "./createNewPostForm.scss";

const CreateNewPostForm = ({ listId }) => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    text.trim().length ? setDisabled(false) : setDisabled(true);
  }, [text]);

  const handlyClick = () => {
    dispatch(addNewPost({ text: text, completed: completed, id: listId }));
    setText("");
    setCompleted(false);
  };

  return (
    <div className="input-block">
      <div className="input-block__input"></div>
      <Input
        type="text"
        placeholder="Enter your task here"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="input-block__btn">
        <Checkbox completed={completed} onChange={() => setCompleted(true)} />
        <Button type="add" onClick={handlyClick} disabled={disabled} />
      </div>
    </div>
  );
};

export default CreateNewPostForm;
