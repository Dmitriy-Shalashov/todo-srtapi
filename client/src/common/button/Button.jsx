import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ option, onClick, disabled }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      disabled={disabled ? "disabled" : null}
    >
      <i
        className={cn({
          "bx bx-plus-medical": option === "add",
          "bx bx-trash bx-xs": option === "del",
          "bx bxs-chevron-left bx-xs": option === "goBack",
          "bx bx-chevron-up bx-xs": option === "scrollUp",
        })}
      ></i>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
