import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faUserNinja } from '@fortawesome/free-solid-svg-icons'; // Example icons
import star_icon from '../Assets/star_icon.png'; // Active star icon
import star_dull_icon from '../Assets/star_dull_icon.png'; // Inactive star icon

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gopal Rao",
      feedback: "An excellent platform with seamless features. It truly helped improve my productivity.",
      icon: faUserTie,
      rating: 4 // Rating out of 5
    },
    {
      name: "Vamsi Krishna",
      feedback: "Fantastic experience! The customer support was outstanding and the features are top-notch.",
      icon: faUser,
      rating: 5
    },
    {
      name: "Trivikram",
      feedback: "I’m very impressed with the ease of use and the powerful features. Highly recommend!",
      icon: faUserNinja,
      rating: 3
    }
  ];

  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <img
          key={i}
          src={i < rating ? star_icon : star_dull_icon}
          alt={i < rating ? 'Filled star' : 'Empty star'}
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <FontAwesomeIcon icon={testimonial.icon} className="testimonial-icon" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            <div className="stars-container">
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
