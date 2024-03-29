import React from "react";
import "./Skills.css";
import Card from "../Card/Card";
import html from "../../img/html logo.png";
import css from "../../img/css logo.png";
import js from "../../img/JavaScript-logo.png";
import ts from "../../img/Typescript_logo.png";
import sass from "../../img/sass logo.png";
import react from "../../img/react logo.png";
import NextJS from "../../img/nextJs.png";
import Tailwind from "../../img/tailwind.png";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <h1>My Skills</h1>
      <div className="s-container">
        <Card title={"TypeScript"} image={ts} />
        <Card title={"JavaScript"} image={js} />
        <Card title={"REACT"} image={react} />
        <Card title={"NextJS"} image={NextJS} />
        <Card title={"SCSS"} image={sass} />
        <Card title={"TailWind"} image={Tailwind} />
        <Card title={"CSS"} image={css} />
        <Card title={"HTML"} image={html} />
      </div>
      <div className="blur s-blur-1"></div>
      <div className="blur s-blur-2"></div>
    </div>
  );
};

export default Skills;
