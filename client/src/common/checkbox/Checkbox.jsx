import React from "react";
import "./checkbox.scss";

const Checkbox = ({ onChange, completed, disabled }) => {
  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={completed}
      onChange={onChange}
      disabled={disabled ? "disabled" : null}
    />
  );
};

export default Checkbox;
