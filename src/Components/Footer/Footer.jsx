import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Ajay Reddy</h3>
          <p>Your Front-End Developer & React Enthusiast</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com/AJAY2043" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/ajay-krishna-reddy/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com/AJAY2043" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" /> GitHub
          </a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Ajay Reddy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
