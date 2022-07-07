import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import Button from "../button/Button";
import "./scrollToUp.scss";

const ScrollToUp = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    pageYOffset > 50 ? setVisible(true) : setVisible(false);
  }, [pageYOffset]);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return false;
  }

  return (
    <>
      <div className="scroll-btn">
        <Button type="scrollUp" onClick={scroll} />
      </div>
    </>
  );
};

export default ScrollToUp;
