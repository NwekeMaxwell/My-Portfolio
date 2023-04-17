import React from "react";
import "./Skills.css";
import Card from "../Card/Card";
// import Resume from "../Maxwell's Resume.pdf";
// import { themeContext } from "../../Context";
// import { useContext } from "react";
// import { motion } from "framer-motion";

const Skills = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  // style={{ color: darkMode ? "var(--tertiary-light)" : "" }}
  // const transition = { duration: 1, type: "spring" };
  return (
    <div className="skills" id="Skills">
      <h1>My Skills</h1>
      <div className="s-container">
        <Card heading={"JavaScript"} percent={95} />
        <Card heading={"ReactJS"} percent={90} />
        <Card heading={"TypeScript"} percent={70} />
        <Card heading={"SCSS"} percent={100} />
        <Card heading={"Python"} percent={30} />
        <Card heading={"C"} percent={30} />
        <Card heading={"Shell"} percent={50} />
        <Card heading={"MySQL"} percent={40} />
      </div>
      <div className="blur s-blur-1"></div>
      <div className="blur s-blur-2"></div>
    </div>
  );
};

export default Skills;
