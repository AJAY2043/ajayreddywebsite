import React from 'react';
import './UserStories.css'; // Import the corresponding CSS file for styling

const UserStories = () => {
  // Example data for user stories
  const stories = [
    {
      id: 1,
      title: 'Success Story 1',
      description: 'This is a short description of the user story.',
      author: 'Ajay Reddy',
    },
    {
      id: 2,
      title: 'Success Story 2',
      description: 'Another inspiring story shared by a user.',
      author: 'Krishna B.',
    },
  ];

  return (
    <div className="user-stories-container">
      <h2 className="user-stories-title">User Stories</h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <h3 className="story-title">{story.title}</h3>
            <p className="story-description">{story.description}</p>
            <p className="story-author">By: {story.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStories;
