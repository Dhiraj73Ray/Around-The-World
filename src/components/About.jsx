import React from 'react';
import '../assets/css/about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Welcome to our Earth Explorer app! This platform showcases beautiful places from around the world.
        Whether you're here to explore, get inspired, or simply admire, we hope you enjoy your journey through our collection.
      </p>
      <p className="about-text">
        Built with ❤️ using React, this app is part of a larger project aiming to bring virtual travel to your screen.
      </p>
      <Link to={'/add-place'}><button className='add-btn'>+ Add Place</button></Link>
      
    </div>
  );
};

export default About;
