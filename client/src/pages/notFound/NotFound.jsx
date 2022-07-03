import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import Error from "../../assets/Error.png";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found container">
      <div className="not-found__image">
        <img src={Error} alt="error" />
      </div>
      <div className="not-found__btn">
        <Button type="goBack" onClick={() => navigate(-1)} />
        <h2 className="btn__title">Go Back</h2>
      </div>
    </div>
  );
};

export default NotFound;
