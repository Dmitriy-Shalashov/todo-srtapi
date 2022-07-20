import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={`container ${styles.loader}`}>
      <div className={styles["loader__wrapper"]}>
        <div className={styles["loader__box"]}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles["loader__title"]}>
          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
