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
        })}
      ></i>
    </button>
  );
};

export default Button;
