import React, { useState, useEffect } from "react";
import "./Card.css";
// import { Link } from "react-scroll";
// import { useContext } from "react";
// import { themeContext } from "../../Context";
// const theme = useContext(themeContext);
// const darkMode = theme.state.darkMode;

const Card = ({ percent, heading }) => {
  const [percentValue, setPercentValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (percentValue >= percent) {
        return;
      } else {
        setPercentValue((perc) => perc + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [percentValue]);

  // const [percentValue, setPercentValue] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {}, 1000);
  //   console.log(percentValue);
  //   return () => {
  //     if (percentValue > percent) {
  //       return clearInterval(interval);
  //     } else {
  //       setPercentValue((perc) => perc + 1);
  //     }
  //   };
  // }, [percentValue]);

  return (
    <div className="card">
      <div
        className="circleWrap"
        style={{
          background: `conic-gradient(var(--primary-light) ${
            percentValue * 3.6
          }deg, #ededed 0deg)`,
        }}
      >
        <span className="progressValue">{percentValue}%</span>
      </div>
      <div className="title">{heading}</div>
    </div>
  );
};

// <span
//   style={{ color: darkMode ? "" : "var(--secondary-dark)" }}
//   className="detail"
// >
//smooth scroll
// </span>
// <Link spy={true} to="Projects" smooth={true}>
//   <button className="c-button">LEARN MORE</button>
// </Link>
export default Card;
