import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <motion.div
        initial={{ transform: "ScaleX(0.1)" }}
        whileInView={{ transform: "ScaleX(1)" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="achievement"
      >
        <div className="circle">1+</div>
        <span>Years</span>
        <span>Experience</span>
      </motion.div>
      <motion.div
        initial={{ transform: "ScaleY(0.1)" }}
        whileInView={{ transform: "ScaleY(1)" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="achievement"
      >
        <div className="circle">10+</div>
        <span>Completed</span>
        <span>Projects</span>
      </motion.div>
      <motion.div
        initial={{ transform: "ScaleX(0.1)" }}
        whileInView={{ transform: "ScaleX(1)" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="achievement"
      >
        <div className="circle">2+</div>
        <span>Companies</span>
        <span>Work</span>
      </motion.div>
    </div>
  );
};

export default Experience;
