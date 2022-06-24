import React from "react";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/todoListsSlice";
import Button from "../button/Button";
import "./listItem.scss";

const ListItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const handlyDeleteList = (e) => {
    e.preventDefault();
    return dispatch(deleteList(id));
  };

  return (
    <div className="list-item">
      <h3 className="list-item__title">{title}</h3>
      <Button type="del" onClick={handlyDeleteList} />
    </div>
  );
};

export default ListItem;
