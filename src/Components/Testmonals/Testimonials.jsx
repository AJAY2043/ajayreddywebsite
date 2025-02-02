import React from 'react';
import './Testimonials.css'; // Importing CSS for styling (Create this file)

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'This product has exceeded my expectations! Highly recommended.',
      image: 'https://via.placeholder.com/100', // Placeholder image
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Amazing service and great quality. Loved the experience!',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Sam Wilson',
      feedback: 'A reliable platform with excellent support. Five stars!',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="testimonial-image"
            />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
