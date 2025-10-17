import React, { forwardRef } from "react";

import "./Navbar.css";
import Footer from "./Footer";
import { FaGithub, FaChevronDown } from "react-icons/fa";



const Navbar = ({footerRef , topp}) => {

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <nav className="navbar" ref={topp}>
      
      <div className="navbar-logo">
        <span className="logo-icon">⟲</span>
        <h2>Frontend Mentor</h2>
      </div>

      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li className="dropdown">
            EXPLORE <FaChevronDown className="icon" />
            <ul className="dropdown-menu">
              <li>Challenges</li>
              <li>Projects</li>
              <li  onClick={scrollToFooter} style={{ cursor: "pointer" }}>Contact</li>
            </ul>
          </li>

          <li className="dropdown">
            FOR COMPANIES <FaChevronDown className="icon" />
            <ul className="dropdown-menu">
              <li>Hire Developers</li>
              <li>Host Challenges</li>
              <li>Train Developers</li>
            </ul>
          </li>

          <li>
            UNLOCK <span className="pro-badge">PRO</span>
          </li>
        </ul>

        <button className="github-btn"><a className="Girthub_btn" href="https://www.github.com">LOG IN WITH GITHUB <FaGithub className="github-icon" /></a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
