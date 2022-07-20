import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={cn(styles.modal, {
        active: active,
      })}
      onClick={() => setActive(false)}
    >
      <div
        className={cn(styles["modal__content"], {
          active: active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
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
