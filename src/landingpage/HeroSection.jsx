import React from 'react';
import '../styles/HeroSection.css';


const HeroSection = ({ children }) => {
  return (
    <div className='hero-section'>
      <div>{children}</div>
    </div>
  );
};

export default HeroSection;
