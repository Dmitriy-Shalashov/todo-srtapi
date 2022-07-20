import React from "react";
import PropTypes from "prop-types";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ onChange, completed, disabled }) => {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={completed}
      onChange={onChange}
      disabled={disabled ? "disabled" : null}
    />
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default React.memo(Checkbox);
