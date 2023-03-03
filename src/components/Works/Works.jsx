import React from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Reddit from "@iconscout/react-unicons/icons/uil-reddit-alien-alt";
import ReactIcon from "@iconscout/react-unicons/icons/uil-react";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "var(--tertiary-light)" : "" }}>
          Works with All these
        </span>
        <span>Tools & Socials</span>

        <span>
          Enthusiastic to deliver before expected time frame
          <br />
          24hrs available and in touch
          <br />
          Disciplined and an active learner
          <br />
          Effective communicator -ENGLISH
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
            <LinkedIn />
            {/* <img src={Shopify} alt="" /> */}
          </div>
          <div className="w-secCircle">
            <Twitter />
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
