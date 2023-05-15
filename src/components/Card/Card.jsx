import React from "react";
import "./Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="image" />
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
