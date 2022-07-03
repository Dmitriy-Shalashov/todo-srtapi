import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
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
        {active && <>{children}</>}
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
