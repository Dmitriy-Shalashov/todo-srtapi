import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/todoListsSlice";
import { useLocation, useNavigate } from "react-router-dom";

import { selectListTitle, selectAllPosts } from "../../store/selectors";

import Button from "../button/Button";
import Modal from "../modal/Modal";
import ModalContent from "../../components/modal-content/ModalContent";

import styles from "./Header.module.scss";

const Header = () => {
  const [title, setTitle] = useState("");
  const [params, setParams] = useState("");
  const [type, setType] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const listTitle = useSelector(selectListTitle);
  const { listId } = useSelector(selectAllPosts);
  const dispath = useDispatch();

  const variantsHeaderParams = useCallback(() => {
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

  useEffect(() => {
    variantsHeaderParams();
  }, [variantsHeaderParams]);

  const handleClick = useCallback(() => {
    if (pathname === "/") {
      setModalActive(!modalActive);
    } else {
      dispath(deleteList(listId));
      navigate("/");
    }
  }, [pathname, listId, modalActive, navigate, dispath]);

  return (
    <div className={styles.header}>
      <div className={`container ${styles.header__wrap}`}>
        <div className={styles["header__title"]}>
          <h1>{title}</h1>
        </div>

        <div className={styles["header__btn"]}>
          <h3>{params}</h3>
          <Button option={type} onClick={handleClick}></Button>
        </div>
      </div>
      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          children={<ModalContent />}
        />
      )}
    </div>
  );
};

export default Header;
