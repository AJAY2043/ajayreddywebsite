import React, { useEffect, useState } from 'react';
import './Hero.css';
import hero_img1 from '../Assets/img-1.jpg';
import hero_img2 from '../Assets/img-2.jpg';
import hero_img3 from '../Assets/img-3.jpg';
import hero_img4 from '../Assets/img-4.jpg';

const images = [hero_img1, hero_img2, hero_img3, hero_img4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Ajay's Personal Website</h1>
        <p>Explore my projects, startup ideas, and collaboration opportunities. Let's grow together and make amazing things happen.</p>
      </div>

      <div className="hero-images-container">
        <div
          className="hero-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Hero ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
