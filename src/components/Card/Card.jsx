import React from "react";
import "./Card.css";

const Card = ({ percent, heading }) => {
  // const [percentValue, setPercentValue] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (percentValue >= percent) {
  //       return;
  //     } else {
  //       setPercentValue((perc) => perc + 1);
  //     }
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, [percentValue]);

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
      <img src={percent} alt="" className="image" />
      <div className="title">{heading}</div>
    </div>
  );
};

export default Card;

//<div className="circleWrap">{percent}</div>
// <div className="card">
//   <div
//     className="circleWrap"
//     style={{
//       background: `conic-gradient(var(--primary-light) ${
//         percentValue * 3.6
//       }deg, #ededed 0deg)`,
//     }}
//   >
//     <span className="progressValue">{percentValue}%</span>
//   </div>
//   <div className="title">{heading}</div>
// </div>
