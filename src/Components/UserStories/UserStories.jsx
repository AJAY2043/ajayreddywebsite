import React from 'react';
import './UserStories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons'; // Example icons
import star_icon from '../Assets/star_icon.png';  // Active star icon
import star_dull_icon from '../Assets/star_dull_icon.png'; // Inactive star icon

const UserStories = () => {
  const stories = [
    {
      name: "Venkat Mani",
      feedback: "This platform changed the way I manage my projects. It's intuitive and easy to use!",
      icon: faUserTie,
      rating: 4 // Rating out of 5
    },
    {
      name: "Vijaya Reddy",
      feedback: "An amazing tool that streamlined my workflow. Highly recommend it to anyone!",
      icon: faUser,
      rating: 5
    },
    {
      name: "Krishna Reddy",
      feedback: "The best experience I've had with project management tools. Great features and support!",
      icon: faUserGraduate,
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
    <div className="user-stories">
      <h2>User Stories</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <FontAwesomeIcon icon={story.icon} className="story-icon" />
            <h3>{story.name}</h3>
            <p>{story.feedback}</p>
            <div className="stars-container">
              {renderStars(story.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStories;
