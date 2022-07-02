import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/todoListsSlice";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../button/Button";
import Modal from "../modal/Modal";
import ModalContent from "../../components/modal-content/ModalContent";
import "./header.scss";

const Header = () => {
  const [title, setTitle] = useState("");
  const [params, setParams] = useState("");
  const [type, setType] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const listTitle = useSelector((state) => state.todoLists.todoListTitle);
  const { listId } = useSelector((state) => state.todoPosts.todoPosts);
  const dispath = useDispatch();

  useEffect(() => {
    if (pathname === "/") {
      setParams("Add new Todo List");
      setTitle("My ToDo App");
      setType("add");
    } else {
      setParams("Delete Todo List");
      setType("del");
      setTitle(listTitle ? listTitle.attributes.title : "List info");
    }
  }, [pathname, listTitle]);

  const handlyClick = () => {
    if (pathname === "/") {
      setModalActive(!modalActive);
    } else {
      dispath(deleteList(listId));
      navigate("/");
    }
  };

  return (
    <div className="header">
      <div className="header__wrap container">
        <div className="header__title">
          <h1>{title}</h1>
        </div>

        <div className="header__btn">
          <h3>{params}</h3>
          <Button type={type} onClick={handlyClick}></Button>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        children={<ModalContent />}
      />
    </div>
  );
};

export default Header;
