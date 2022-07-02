import React from "react";
import "./input.scss";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
