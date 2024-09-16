import React from 'react';
import './Clients.css'; // Importing CSS for the section

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Premium Services</h2>
      <p className="services-subtitle">We offer top-notch web solutions for professionals with flexible pricing and premium features.</p>
      <div className="services-container">
        
        {/* Basic Package */}
        <div className="service-box">
          <i className="fas fa-globe service-icon"></i>
          <h3>Basic Personal Website</h3>
          <p>Ideal for professionals looking to establish an online presence.</p>
          <p className="price">Starting at: ₹10,000</p>
          <ul className="service-details">
            <li><i className="fas fa-check-circle"></i> Free Hosting (Netlify)</li>
            <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
            <li><i className="fas fa-check-circle"></i> Responsive Design</li>
          </ul>
        </div>

        {/* Standard Package */}
        <div className="service-box">
          <i className="fas fa-briefcase service-icon"></i>
          <h3>Standard Website</h3>
          <p>Perfect for businesses and professionals needing more features.</p>
          <p className="price">Starting at: ₹25,000</p>
          <ul className="service-details">
            <li><i className="fas fa-check-circle"></i> Domain setup (GoDaddy or others)</li>
            <li><i className="fas fa-check-circle"></i> Custom Email</li>
            <li><i className="fas fa-check-circle"></i> Google Analytics Integration</li>
          </ul>
        </div>

        {/* Premium Package */}
        <div className="service-box premium">
          <i className="fas fa-star service-icon"></i>
          <h3>Premium Website</h3>
          <p>Best for enterprises and professionals who need advanced features.</p>
          <p className="price">Starting at: ₹50,000+</p>
          <ul className="service-details">
            <li><i className="fas fa-check-circle"></i> Custom Design & Branding</li>
            <li><i className="fas fa-check-circle"></i> E-commerce Integration</li>
            <li><i className="fas fa-check-circle"></i> 24/7 Support & Maintenance</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Services;
