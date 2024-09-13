import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './StartUpIdea.css';

const StartUpIdea = () => {
  return (
    <div className="startup-ideas-container">
      <Navbar />
      
      <div className="startup-header">
        <h1>Startup Ideas</h1>
        <p>Our startups are designed to solve everyday challenges with innovative solutions that benefit individuals and society. Below are some of our groundbreaking ideas.</p>
      </div>
      
      <div className="startup-ideas-content">

        {/* Foreman Platform */}
        <div className="startup-card">
          <i className="fas fa-tools startup-icon"></i>
          <h2>Foreman Platform</h2>
          <p>
            Foreman connects skilled workers such as electricians, plumbers, and mechanics e.t.c with customers who need their services. This platform bridges the gap between those seeking reliable service providers and workers who need consistent job opportunities. 
          </p>
          <p><strong>Purpose:</strong> To provide a trustworthy and accessible marketplace for both workers and customers, ensuring fair wages and high-quality services.</p>
          <p><strong>Benefit to Society:</strong> Enhances employment opportunities for skilled labor while providing affordable services to customers.</p>
        </div>

        {/* Scamsters Initiative */}
        <div className="startup-card">
          <i className="fas fa-shield-alt startup-icon"></i>
          <h2>Scamsters</h2>
          <p>
            Scamsters is a fraud alert platform designed to protect people from scams by exposing fraudulent individuals and businesses. It allows users to report scams and browse verified cases, helping others stay informed and cautious.
          </p>
          <p><strong>Purpose:</strong> To create a transparent, scam-free environment where users are informed and protected from fraudulent activities.</p>
          <p><strong>Benefit to Society:</strong> Protects people from financial loss, builds trust, and promotes ethical business practices.</p>
        </div>

        {/* Personal Portfolio Builder */}
        <div className="startup-card">
          <i className="fas fa-user startup-icon"></i>
          <h2>Personal Portfolio Builder</h2>
          <p>
            This service helps individuals build professional, custom portfolios to showcase their skills and experiences. Ideal for developers, designers, and freelancers looking to create an impressive online presence.
          </p>
          <p><strong>Purpose:</strong> To empower professionals with visually appealing portfolios that elevate their career opportunities.</p>
          <p><strong>Benefit to Society:</strong> Helps individuals stand out in competitive industries, driving professional growth and development.</p>
        </div>

        {/* TechUp - Future of Learning */}
        <div className="startup-card">
          <i className="fas fa-graduation-cap startup-icon"></i>
          <h2>TechUp - Future of Learning</h2>
          <p>
            TechUp is an educational platform that provides free and affordable tech education, helping people learn programming, web development, and AI. It's designed for beginners who want to start their careers in tech with practical, hands-on learning.
          </p>
          <p><strong>Purpose:</strong> To make high-quality tech education accessible to everyone, regardless of financial background.</p>
          <p><strong>Benefit to Society:</strong> Reduces the digital divide, enabling individuals to gain skills that lead to higher-paying jobs and economic empowerment.</p>
        </div>

        {/* GreenSpaces Initiative */}
        <div className="startup-card">
          <i className="fas fa-leaf startup-icon"></i>
          <h2>GreenSpaces</h2>
          <p>
            GreenSpaces focuses on creating sustainable, eco-friendly urban spaces by planting trees, promoting green building practices, and increasing environmental awareness. This initiative aims to combat climate change at the local level.
          </p>
          <p><strong>Purpose:</strong> To improve urban environments through sustainability efforts and green innovations.</p>
          <p><strong>Benefit to Society:</strong> Enhances air quality, reduces pollution, and promotes healthier, greener cities.</p>
        </div>

        {/* HealthHub - Digital Health Assistant */}
        <div className="startup-card">
          <i className="fas fa-heartbeat startup-icon"></i>
          <h2>HealthHub - Digital Health Assistant</h2>
          <p>
            HealthHub provides personalized health tracking, reminders for medication, and telehealth consultations. It's a one-stop solution for managing your health digitally, especially for those with chronic conditions.
          </p>
          <p><strong>Purpose:</strong> To offer convenient, affordable healthcare management tools for individuals, helping them stay on top of their health.</p>
          <p><strong>Benefit to Society:</strong> Improves access to healthcare, particularly for individuals in remote areas or with mobility issues.</p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default StartUpIdea;
