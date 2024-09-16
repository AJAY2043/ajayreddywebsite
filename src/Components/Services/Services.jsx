import React from 'react';
import './Services.css'; // Importing CSS for the section

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">What I Offer</h2>
      <div className="services-container">
        
        <div className="service-box">
          <i className="fas fa-briefcase service-icon"></i>
          <h3>Business Owners</h3>
          <p>I create professional websites to help business owners showcase their products and services.</p>
        </div>

        <div className="service-box">
          <i className="fas fa-user-md service-icon"></i>
          <h3>Doctors</h3>
          <p>Build a strong online presence with a responsive, easy-to-navigate website for your practice.</p>
        </div>

        <div className="service-box">
          <i className="fas fa-gavel service-icon"></i>
          <h3>Lawyers</h3>
          <p>Custom websites to highlight your legal expertise and services, boosting client trust.</p>
        </div>

        <div className="service-box">
          <i className="fas fa-chalkboard-teacher service-icon"></i>
          <h3>Teachers & Lecturers</h3>
          <p>Share your knowledge and portfolio through a professional personal website.</p>
        </div>

        <div className="service-box">
          <i className="fas fa-users-cog service-icon"></i>
          <h3>Managers</h3>
          <p>Create a digital portfolio to showcase your managerial experience and skills.</p>
        </div>
        <button>And Many More</button>
      </div>
    </section>
  );
};

export default Services;
