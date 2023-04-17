import React from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Reddit from "@iconscout/react-unicons/icons/uil-java-script";
import ReactIcon from "@iconscout/react-unicons/icons/uil-react";
import HTML5 from "@iconscout/react-unicons/icons/uil-html5";
import CSS3 from "@iconscout/react-unicons/icons/uil-css3-simple";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* left side */}
      <div className="i-name w-left">
        <span style={{ color: darkMode ? "var(--tertiary-light)" : "" }}>
          About Me
        </span>
        <span>and Tools</span>

        <span>
          ~ I am Enthusiastic towards delivering before expected time frame,
          24hrs available and in touch, Disciplined and an active learner,
          Effective communicator -ENGLISH.
          <br /> ~ Extra Tools: SCSS, jQuery, BootStrap, TailWind, GIT & GitHub,
          Jira , Figma, Adobe, PhotoShop.
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button s-button">Hire Me🥇</button>
        </Link>

        <div className="blur w-blur"></div>
      </div>
      {/* // right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <Reddit />
            {/* <img src={Upwork} alt="" /> */}
          </div>
          <div className="w-secCircle">
            {/* <img src={Fiverr} alt="" /> */}
            <ReactIcon />
          </div>
          <div className="w-secCircle">
            <Github />
            {/* <img src={Amazon} alt="" /> */}
          </div>
          <div className="w-secCircle">
            <CSS3 />
            {/* <img src={Shopify} alt="" /> */}
          </div>
          <div className="w-secCircle">
            <HTML5 />
            {/* <img src={Facebook} alt="" /> */}
          </div>
        </motion.div>
        {/* backgroung circles */}
        <div className="w-bgCircle blueCircle"></div>
        <div className="w-bgCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
