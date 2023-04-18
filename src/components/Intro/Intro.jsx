import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";
import Resume from "../Maxwell's Resume.pdf";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "var(--tertiary-light)" : " " }}>
            Hi! I Am
          </span>
          <span>Nweke Maxwell</span>
          <span>
            "A Passionate Frontend Developer with high level of experience in
            web designing and development, producing the Quality work!!!",
          </span>
          <span>
            <Typed
              strings={[
                "Toggle day/night mode by clicking the button above 🌃☀️",
              ]}
              typeSpeed={30}
              backSpeed={10}
              loop
            />
          </span>
        </div>
        <a href={Resume} download>
          <button className="button s-button">DownLoad CV</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/NwekeMaxwell">
            <img src={Github} alt="github" />
          </a>
          <a href="https://linkedin.com/in/nwekemaxwell">
            <img src={LinkedIn} alt="linkedIn" />
          </a>
          <a href="https://instagram.com/ablemax_">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <div className="i-avatar">
          <img src={boy} alt="" />
        </div>

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-20%" }}
          transition={transition}
          src={glassesemoji}
          alt=""
          className="floating-emoji"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className=" i-floatingDiv1"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "25rem", left: "9rem" }}
          whileInView={{ left: "25.5%" }}
          transition={transition}
          className="i-floatingDiv2"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blurs */}
        <div className="blur i-blur-1"></div>
        <div className="blur i-blur-2"></div>
      </div>
    </div>
  );
};

export default Intro;
