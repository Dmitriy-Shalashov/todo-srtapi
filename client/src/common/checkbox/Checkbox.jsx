import React from "react";
import "./checkbox.scss";

const Checkbox = ({ type, onChange, completed }) => {
  return (
    <>
      <input
        className="checkbox"
        type={type}
        checked={completed}
        onChange={onChange}
      />
      <i class="bx bx-hot"></i>
    </>
  );
};

export default Checkbox;
