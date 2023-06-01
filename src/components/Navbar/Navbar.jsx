import React, { useEffect, useRef, useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Menu from "../../img/menu.svg";
import Cross from "../../img/cross.svg";

const useClickOutside = (handlerFunction) => {
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        handlerFunction();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return menuRef;
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleChange = () => setActive(!active);
  const menuRef = useClickOutside(() => {
    setActive(false);
  });
  return (
    <div className="n-wrapper" id="NavBar">
      <div className="n-left">
        <div className="n-name">Maxwell</div>
        <div className="toggleDN">
          <Toggle />
        </div>
        {/* mobile nav */}
        <div>
          <img src={Menu} onClick={handleChange} alt="" className="nav-icon" />
        </div>
        <div>
          <nav>
            <ul
              ref={menuRef}
              className={`navigation-list ${active ? "show" : ""}`}
            >
              <img
                src={Cross}
                onClick={handleChange}
                alt=""
                className="nav-icon"
              />
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
            <Link spy={true} to="Contact" smooth={true}>
              <li className="nav">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
