import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="NavBar">
      <div className="n-left">
        <div className="n-name">Maxwell</div>
        <div className="toggleDN">
          <Toggle />
        </div>
        {/* phone size nav */}
        <div class="navigation">
          <input
            type="checkbox"
            class="navigation-checkbox"
            id="navigation-toggle"
          />

          <label for="navigation-toggle" class="navigation-button">
            <span class="navigation-icon">&nbsp;</span>
          </label>

          {/* <div class="navigation-background">&nbsp;</div> */}

          <nav class="navigation-nav">
            <ul class="navigation-list">
              <Link spy={true} to="Navbar" smooth={true}>
                <li className="navigation-item">Home</li>
              </Link>
              <Link spy={true} to="Skills" smooth={true}>
                <li className="navigation-item">Skills</li>
              </Link>
              <Link spy={true} to="Experience" smooth={true}>
                <li className="navigation-item">Experience</li>
              </Link>
              <Link spy={true} to="Projects" smooth={true}>
                <li className="navigation-item">Projects</li>
              </Link>
              <Link spy={true} to="Testimonials" smooth={true}>
                <li className="navigation-item">Testimonials</li>
              </Link>
              <Link spy={true} to="Contact" smooth={true}>
                <li className="navigation-item">Contact Me</li>
              </Link>
              <Toggle />
            </ul>
          </nav>
        </div>
        {/* end phone nav */}
      </div>
      <div className="n-right">
        {/* desktop nav */}
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
