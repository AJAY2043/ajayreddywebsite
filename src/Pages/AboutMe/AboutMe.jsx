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
          I graduated from PRIST Deemed University in Chennai, Tamil Nadu.
        </p>
        <p>
          I became a <strong>Frontend Developer</strong>,with a passion in web development and with a special interest in <strong>React.js</strong>, I now Looking to work as a React Developer. 
          My dream is to become a young entrepreneur and make a difference in society by creating a fraud-free and scam-free India.
        </p>
        <p>
          To pursue this, I developed platforms like <strong>Scamsters</strong> to expose frauds, and <strong>Where is My Foreman</strong> to support skilled workers. 
          My goal is to see my country progress from a developing stage to a developed stage.
        </p>
        <p>
          Despite my good intentions and talent, I haven't received much support or encouragement from family, friends, or relatives. 
          Currently, I'm seeking a job in <strong>React.js</strong> or Front-End Development, which would help expand my professional circle and allow me to launch my startup ideas.
        </p>
        <p>
          I'm also venturing into freelance projects, helping individuals create personal websites and portfolios. I believe this could generate revenue to Me ,where it is like just like essential documents such as Aadhaar, PAN, voter ID, and driving licenses.
          However, I’ve faced too many challenges in getting clients.
        </p>
        <p>
          Life hasn't been easy, and many people have deceived me, but I remain determined to achieve my goals and contribute to society positively.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
