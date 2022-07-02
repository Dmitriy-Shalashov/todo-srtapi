import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/todoPostsSlice";
import Input from "../input/Input";
import Button from "../button/Button";
import "./createNewPostForm.scss";

const CreateNewPostForm = ({ listId }) => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    text.trim().length ? setDisabled(false) : setDisabled(true);
  }, [text]);

  const handlyClick = () => {
    dispatch(addNewPost({ text: text, id: listId }));
    setText("");
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
        <Button type="add" onClick={handlyClick} disabled={disabled} />
      </div>
    </div>
  );
};

export default CreateNewPostForm;
