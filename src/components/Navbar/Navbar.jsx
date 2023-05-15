import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Menu from "../../img/menu.svg";
import Cross from "../../img/cross.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleChange = () => setActive(!active);

  console.log(active);
  return (
    <div className="n-wrapper" id="NavBar">
      <div className="n-left">
        <div className="n-name">Maxwell</div>
        <div className="toggleDN">
          <Toggle />
        </div>
        {/* mobile nav */}
        <div>
          <img
            src={active ? Cross : Menu}
            onClick={handleChange}
            alt=""
            className="nav-icon"
          />
        </div>
        <div>
          <nav className={`navigation-nav ${active ? "show" : ""}`}>
            <ul className="navigation-list">
              <a onClick={handleChange} href="/#">
                <li className="navigation-item">Home</li>
              </a>
              <Link
                onClick={handleChange}
                offset={-50}
                to="Skills"
                smooth={true}
              >
                <li className="navigation-item">Skills</li>
              </Link>
              <Link
                onClick={handleChange}
                offset={-50}
                to="Experience"
                smooth={true}
              >
                <li className="navigation-item">Experience</li>
              </Link>
              <Link
                onClick={handleChange}
                offset={-50}
                to="Projects"
                smooth={true}
              >
                <li className="navigation-item">Projects</li>
              </Link>
              <Link
                onClick={handleChange}
                offset={-50}
                to="Testimonials"
                smooth={true}
              >
                <li className="navigation-item">Testimonials</li>
              </Link>
              <Link
                onClick={handleChange}
                offset={-50}
                to="Contact"
                smooth={true}
              >
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
