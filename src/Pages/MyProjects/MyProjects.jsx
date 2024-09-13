import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const MyProjects = () => {
  return (
    <div className="projects-container">
      <Navbar />
      <div className="projects-content">
        <h1>My Projects</h1>
        <p>
          Here are some exciting projects showcasing my expertise in Front-End Development and React.js. Each project has a unique purpose, solving real-world problems with responsive, user-friendly interfaces.
        </p>
        
        <div className="projects-grid">
          {/* Foreman Platform */}
          <div className="project-card">
            <h3>Foreman Platform</h3>
            <p>A platform connecting skilled workers with customers. Built using React, it features user authentication, detailed worker profiles, and booking functionalities.</p>
            <a href="https://whereismyforeman.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/foreman-project" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>

          {/* Scamsters */}
          <div className="project-card">
            <h3>Scamsters</h3>
            <p>A platform designed to expose scams and frauds in India, aiming for a scam-free society. It allows users to post and share scam alerts to help others avoid fraud.</p>
            <a href="https://scamsters.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/scamsters-prototype" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>

          {/* Mani Reddy's Portfolio */}
          <div className="project-card">
            <h3>Mani Reddy's Portfolio</h3>
            <p>A personal portfolio website built using React.js to showcase Mani Reddy’s professional journey and projects. It features smooth transitions and a responsive layout.</p>
            <a href="https://manireddys.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/manireddywebsite" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>

          {/* Ajay WebDev Portfolio */}
          <div className="project-card">
            <h3>Ajay WebDev Portfolio</h3>
            <p>A personal portfolio showcasing my work as a React.js developer. Includes information about my skills, projects, and contact details with a clean aesthetic.</p>
            <a href="https://ajaywebdev.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/personal-website" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>

          {/* ARMArt E-Commerce */}
          <div className="project-card">
            <h3>ARMArt E-Commerce</h3>
            <p>An e-commerce platform for selling Mobiles & Watches & Ac's & Tv's & Kitchen Items And many more. It includes product Filtering, cart functionality.</p>
            <a href="https://reactshoppers.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/react-ecom-armart" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>

          {/* Shopper E-Commerce */}
          <div className="project-card">
            <h3>Shopper E-Commerce</h3>
            <p>A comprehensive e-commerce platform developed with React. It features product listings, filtering, a shopping cart, and a secure checkout process.</p>
            <a href="https://reactshoppers.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/shopper-react" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>

          {/* Vijaya Reddy's Website */}
          <div className="project-card">
            <h3>Vijaya Reddy's Website</h3>
            <p>A website built for Vijaya Reddy to showcase professional achievements, personal experiences, and social contributions.</p>
            <a href="https://vijayareddy.netlify.app" target="_blank" rel="noopener noreferrer">
              Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="https://github.com/AJAY2043/vijayareddy-website" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProjects;
