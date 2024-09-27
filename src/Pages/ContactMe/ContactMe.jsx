import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Updated import for LinkedIn and WhatsApp icons

const ContactMe = () => {
  return (
    <div className="contactme-container">
      <Navbar />
      
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>If you'd like to get in touch, please find my contact information below. I'm available for collaborations, consultations, and any inquiries you may have!</p>
      </div>

      <div className="contact-details">
        <div className="contact-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+91888128867">+91 8881288867</a></p>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h3>Email</h3>
          <p><a href="mailto:ajaykreddy1.akr@gmail.com">ajaykreddy1.akr@gmail.com</a></p>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <h3>Address</h3>
          <p>
            8-23, Pyramid House, <br />
            Old Bank Bazar, V Reddypalem, <br />
            Rompicherla (M.D), Palnadu (D.T), <br />
            Andhra Pradesh, India-522615
          </p>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/ajay-krishna-reddy/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></p>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/918881288867" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactMe;
