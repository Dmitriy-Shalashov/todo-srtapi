import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import Error from "../../assets/Error.png";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={`container ${styles.notFound}`}>
      <div className={styles["notFound__image"]}>
        <img src={Error} alt="error" />
      </div>
      <div className={styles["notFound__btn"]}>
        <Button type="goBack" onClick={() => navigate(-1)} />
        <h2 className={styles["btn__title"]}>Go Back</h2>
      </div>
    </div>
  );
};

export default NotFound;
