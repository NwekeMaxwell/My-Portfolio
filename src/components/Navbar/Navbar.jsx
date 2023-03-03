import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="NavBar">
      <div className="n-left">
        <div className="n-name">Maxwell</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true}>
              <li className="nav">Home</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li className="nav">Skills</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li className="nav">Experience</li>
            </Link>
            <Link spy={true} to="Projects" smooth={true}>
              <li className="nav">Projects</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li className="nav">Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
