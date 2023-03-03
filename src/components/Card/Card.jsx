import React from "react";
import "./Card.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span className="heading">{heading}</span>
      <span
        style={{ color: darkMode ? "" : "var(--secondary-dark)" }}
        className="detail"
      >
        {detail}
      </span>
      <Link spy={true} to="Projects" smooth={true}>
        <button className="c-button">LEARN MORE</button>
      </Link>
    </div>
  );
};

export default Card;
