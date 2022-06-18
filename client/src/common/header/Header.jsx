import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const [title, setTitle] = useState("");
  const [params, setParams] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setParams("Add new Todo List");
      setTitle("My ToDo App");
    } else {
      setTitle("Test title");
      setParams("Delete Todo List");
    }
  }, [pathname]);

  return (
    <div className="header">
      <div className="header__wrap container">
        <div className="header__title">
          <h1>{title}</h1>
        </div>
        <div className="header__btn">
          <h3>{params}</h3>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
