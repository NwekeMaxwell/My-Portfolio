import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" />
      <div className="f-content">
        Thank you for going through my portfolio. Your Offers, compliments,
        recommendations and suggestions for improvement are highly appreciated.
        <div>&copy; Copyright.NwekeMaxwell37@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
