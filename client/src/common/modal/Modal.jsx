import React from "react";
import classNames from "classnames";
import "./modal.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={classNames("modal", {
        active: active,
      })}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames("modal__content", {
          active: active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
