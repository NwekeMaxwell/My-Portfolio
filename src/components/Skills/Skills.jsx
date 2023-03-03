import React from "react";
import "./Skills.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../Maxwell's Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="skills" id="Skills">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "var(--tertiary-light)" : "" }}>
          My Basic
        </span>
        <span>Skills</span>
        <span>
          ReactJS, JavaScript, SASS, CSS3, HTML5, jQuery, BootStrap, TailWind.
          <br />
          GIT & GitHub, Jira , Figma, Adobe, PhotoShop.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Resume ⬇️</button>
        </a>
        <div className="blur s-blur"></div>
      </div>
      {/* right side */}
      <motion.div
        initial={{ left: "35%" }}
        whileInView={{ left: "10rem" }}
        transition={transition}
        className="cards card-1"
      >
        <Card
          emoji={HeartEmoji}
          heading={"Design"}
          detail={"Figma, Adobe Photoshop, Autodesk SketchBook"}
        />
      </motion.div>

      <motion.div
        initial={{ left: "-35%" }}
        whileInView={{ left: "-8rem" }}
        transition={transition}
        className="cards card-2"
      >
        <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"HTML5, CSS3, SASS, JavaScript, React"}
        />
      </motion.div>

      <motion.div
        initial={{ top: "18rem", left: "20rem" }}
        whileInView={{ left: "7.5rem" }}
        transition={transition}
        className="cards card-3"
      >
        <Card
          emoji={Humble}
          heading={"SOCIAL"}
          detail={"StackOverflow, LinkedIn, Twitter, Instagram, faceBook"}
        />
      </motion.div>
      <div className="blur s-blur-1"></div>
      <div className="blur s-blur-2"></div>
    </div>
  );
};

export default Skills;
