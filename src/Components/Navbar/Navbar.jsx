import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="main-nav">
        <div className="nav-tittle">
          <Link to="/">
            <h3>Ajay Reddy's</h3>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-aboutme">
            <Link to="/aboutme" onClick={toggleMenu}>
              <h3>AboutMe</h3>
            </Link>
          </div>
          <div className="nav-collab">
            <Link to="/mystartupideas" onClick={toggleMenu}>
              <h3>My Startup Idea's</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Sub Navigation Links */}
      <div className={`sub-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-projects">
          <Link to="/myprojects" onClick={toggleMenu}>
            <h3>My Projects</h3>
          </Link>
        </div>
        <div className="nav-startup">
          <Link to="/collabrations" onClick={toggleMenu}>
            <h3>Collabrate with Me</h3>
          </Link>
        </div>
        <div className="nav-contact">
          <Link to="/contactme" onClick={toggleMenu}>
            <h3>ContactMe</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;