import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faTools, faShieldAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Collabrations.css';

const Collabrations = () => {
  return (
    <div className="collaborations-container">
      <Navbar />

      <div className="collaborations-header">
        <h1>Collaborations</h1><FontAwesomeIcon icon={faHandshake} className="icon" />
        <p>Partner with Me to build a better future. Here are some exciting projects where I am looking for collaborations.</p>
      </div>

      <div className="collaborations-content">
        {/* Foreman Platform */}
        <div className="collaboration-card">
          <FontAwesomeIcon icon={faTools} className="icon" />
          <h2>Foreman Platform</h2>
          <p>
            Join Me in building a platform that connects skilled workers with customers. I am looking for collaborators in front-end, back-end, database, and marketing to take this platform to the next level.
          </p>
          <a href="https://whereismyforeman.netlify.app" target="_blank" rel="noopener noreferrer" className="collab-btn">
            Visit Project
          </a>
        </div>

        {/* Scamsters */}
        <div className="collaboration-card">
          <FontAwesomeIcon icon={faShieldAlt} className="icon" />
          <h2>Scamsters</h2>
          <p>
            Scamsters aims to create a scam-free society by exposing fraudsters. I am inviting collaborations with cybersecurity experts, content creators, and legal professionals to expand our impact.
          </p>
          <a href="https://scamsters.netlify.app" target="_blank" rel="noopener noreferrer" className="collab-btn">
            Visit Project
          </a>
        </div>

        {/* Personal Portfolios */}
        <div className="collaboration-card">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <h2>Personal Portfolio Services</h2>
          <p>
            We specialize in building custom portfolios for individuals. Whether you're a developer, designer, or entrepreneur, we can help showcase your skills. Collaborate with us to provide premium portfolio services.
          </p>
          <a href="https://ajaywebdev.netlify.app" target="_blank" rel="noopener noreferrer" className="collab-btn">
            Visit My Portfolio
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collabrations;
