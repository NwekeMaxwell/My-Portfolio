import React from "react";
import "./Skills.css";
import Card from "../Card/Card";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <h1>My Skills</h1>
      <motion.div
        initial={{ transform: "Scale(0.95)" }}
        whileInView={{ transform: "Scale(1)" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="s-container"
      >
        <Card heading={"JavaScript"} percent={95} />
        <Card heading={"ReactJS"} percent={90} />
        <Card heading={"TypeScript"} percent={70} />
        <Card heading={"SCSS"} percent={100} />
        <Card heading={"Python"} percent={30} />
        <Card heading={"C"} percent={30} />
        <Card heading={"Shell"} percent={50} />
        <Card heading={"MySQL"} percent={40} />
      </motion.div>
      <div className="blur s-blur-1"></div>
      <div className="blur s-blur-2"></div>
    </div>
  );
};

export default Skills;
