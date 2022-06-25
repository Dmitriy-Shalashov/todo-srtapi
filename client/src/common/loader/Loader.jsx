import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader container">
      <div className="loader__wrapper">
        <div className="loader__box">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="loader__title">
          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
