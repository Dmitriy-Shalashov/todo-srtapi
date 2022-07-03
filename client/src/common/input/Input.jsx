import React from "react";
import PropTypes from "prop-types";
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

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
