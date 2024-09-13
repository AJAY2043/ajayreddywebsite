import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Creative Coding in React',
      icon: faCode,
      description: 'Learn how to bring your creative ideas to life through React.js and animation libraries.',
      link: '#',
    },
    {
      title: 'Innovative Ideas for Web Development',
      icon: faLightbulb,
      description: 'Explore groundbreaking concepts and projects that push the boundaries of web development.',
      link: '#',
    },
    {
      title: 'Art and Code: The Intersection',
      icon: faPalette,
      description: 'Discover how coding and artistic expression can merge to create visually stunning web experiences.',
      link: '#',
    },
  ];

  return (
    <section className="blogs-section">
      <h2>My Blogs</h2>
      <div className="blogs-container">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <FontAwesomeIcon icon={post.icon} className="blog-icon" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to='/mystartupideas' style={{textDecoration:'none'}}><a href={post.link} className="read-more-btn">Read More</a></Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
