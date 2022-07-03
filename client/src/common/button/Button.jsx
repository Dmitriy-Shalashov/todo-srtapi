import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ type, onClick, disabled }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      disabled={disabled ? "disabled" : null}
    >
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

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
