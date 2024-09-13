import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Normally, subscription logic goes here
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest news, updates, and special offers.</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default NewsLetter;
