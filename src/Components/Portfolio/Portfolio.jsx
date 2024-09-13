import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Portfolios = () => {
  return (
    <section className="portfolios-section">
      <div className="container">
        <h2>My Portfolios</h2>
        <p>Explore a glimpse of the various projects and startups I've worked on, ranging from web development to innovative solutions for societal problems.</p>

        <div className="portfolios-grid">
          <div className="portfolio-card">
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h3>Foreman Platform</h3>
            <p>A platform connecting skilled workers with customers, featuring user profiles, booking systems, and user authentication.</p>
          </div>

          <div className="portfolio-card">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <h3>Scamsters</h3>
            <p>A platform aimed at exposing scams and frauds to protect the community and create a safer society.</p>
          </div>

          <div className="portfolio-card">
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            <h3>Personal Portfolios</h3>
            <p>Custom-built personal portfolio websites showcasing professional achievements and project experiences.</p>
          </div>

          <div className="portfolio-card">
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h3>ARMArt E-Commerce</h3>
            <p>An e-commerce platform for selling art and crafts, complete with product browsing and secure payment gateways.</p>
          </div>
        </div>

        <div className="view-more">
          <Link to='/myprojects' style={{textDecoration:'none'}}><a href="/projects" className="view-more-link">View More Projects</a></Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
