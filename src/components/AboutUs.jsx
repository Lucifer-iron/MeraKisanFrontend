// create a about us component 


import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <img src="/grocery.png" alt="About Us" />
      <div className="about-us-text">

      <h1>About Us</h1>
      <h2>We believe in working with accredited farmers</h2>
      <p>Organic food is directly delivered from farm.Talk with your nearby local farmer. Discuss product details. And get it delivered to your home.sd</p>
      <button className="learn-more" onClick={() => window.location.href='/about-us'}>
        Learn More
      </button>
      </div>
    </div>
  );
};

export default AboutUs;