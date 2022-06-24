import React from "react";
import classNames from "classnames";
import "./button.scss";

const Button = ({ type, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <i
        className={classNames({
          "bx bx-plus-medical": type === "add",
          "bx bx-trash bx-xs": type === "del",
          "bx bxs-chevron-left bx-xs": type === "goBack",
        })}
      ></i>
    </button>
  );
};

export default Button;
