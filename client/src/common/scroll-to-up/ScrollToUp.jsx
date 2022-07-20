import React, { useState, useEffect, useCallback } from "react";
import { useWindowScroll } from "react-use";
import Button from "../button/Button";

import styles from "./ScrollToUp.module.scss";

const ScrollToUp = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    pageYOffset > 50 ? setVisible(true) : setVisible(false);
  }, [pageYOffset]);

  const scroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {visible && (
        <div className={styles["scroll-btn"]}>
          <Button option="scrollUp" onClick={scroll} />
        </div>
      )}
    </>
  );
};

export default ScrollToUp;
