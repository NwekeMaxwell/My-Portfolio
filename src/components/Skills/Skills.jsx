import React from "react";
import "./Skills.css";
import Card from "../Card/Card";
import html from "../../img/html logo.png";
import css from "../../img/css logo.png";
import js from "../../img/JavaScript-logo.png";
import ts from "../../img/Typescript_logo.png";
import sass from "../../img/sass logo.png";
import reac from "../../img/react logo.png";

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
        <Card heading={"TypeScript"} percent={ts} />
        <Card heading={"JavaScript"} percent={js} />
        <Card heading={"REACT"} percent={reac} />
        <Card heading={"SCSS"} percent={sass} />
        <Card heading={"CSS"} percent={css} />
        <Card heading={"HTML"} percent={html} />
      </motion.div>
      <div className="blur s-blur-1"></div>
      <div className="blur s-blur-2"></div>
    </div>
  );
};

export default Skills;
