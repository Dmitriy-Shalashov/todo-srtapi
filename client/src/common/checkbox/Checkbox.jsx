import React from "react";
import "./checkbox.scss";

const Checkbox = ({ type, onChange, completed }) => {
  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={completed}
      onChange={onChange}
    />
  );
};

export default Checkbox;
