import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { createNewList } from "../../store/todoListsSlice";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../button/Button";
import Modal from "../modal/Modal";
import "./header.scss";

const Header = () => {
  //   const dispath = useDispatch();
  const [title, setTitle] = useState("");
  const [params, setParams] = useState("");
  const [type, setType] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  console.log(navigate);

  const listTitle = useSelector((state) => state.todoLists.todoListTitle);

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
    }
    navigate(-1);
    //  dispath(createNewList("List7"));
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
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Header;
