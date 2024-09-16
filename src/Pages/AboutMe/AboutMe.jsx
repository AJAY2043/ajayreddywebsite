import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <Navbar />
      <div className="aboutme-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Ajay Krishna Reddy</strong>, a 25-year-old from Narasaraopet, now in Palnadu district, Andhra Pradesh, born on <strong>September 29, 1998</strong>. 
          I am a passionate <strong>Frontend Developer</strong> with a special focus on <strong>React.js</strong>. I'm always excited to work on projects that help me grow and make an impact in the world of web development.
        </p>
        <p>
          My dream is to become a young entrepreneur, making a meaningful difference in society by building a fraud-free and scam-free India. To pursue this, I've initiated platforms like <strong>Scamsters</strong> to expose fraudsters, and <strong>Where is My Foreman</strong> to help skilled workers connect with clients and showcase their abilities.
        </p>
        <p>
          Currently, I'm seeking opportunities as a <strong>React Developer</strong> or Front-End Developer to further my experience, expand my professional network, and turn my startup ideas into reality.
        </p>
        <p>
          Alongside my job search, I'm also venturing into freelance projects, offering personalized website creation services for professionals such as doctors, lawyers, and business owners. I believe that a personal website is just as essential today as having key documents like Aadhaar or PAN cards.
        </p>
        <p>
          Although life has thrown its challenges my way, and I've faced several setbacks due to a lack of support and even deceit from others, I remain determined to achieve my goals and contribute positively to society.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
