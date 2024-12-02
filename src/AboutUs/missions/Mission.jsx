import React, { useEffect, useState } from 'react';
import './mission.css'
 import before from '../../images/mission/before.webp'
 import after from '../../images/mission/after.webp'

const Mission = () => {
    const [scrolled, setScrolled] = useState(0);
    const [isInViewport, setIsInViewport] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
          const element = document.querySelector('.mission-image-container');
          const rect = element.getBoundingClientRect();
          
          // Checking if the div is in the viewport (visible)
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
            const scrollTop = window.scrollY;
            const elementOffsetTop = element.offsetTop;
            const windowHeight = window.innerHeight;
    
            // Calculating how far user has scrolled past the div
            const distanceScrolled = Math.max(0, scrollTop - elementOffsetTop + windowHeight);
            const maxScrollDistance = windowHeight;
            const scrollPercentage = Math.min(distanceScrolled / maxScrollDistance, 1);
            setScrolled(scrollPercentage);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div className='mission'>
        <section className='mission-section'>
            <div className='mission-section-container'>
       <h3>Quicklift's mission</h3> 
        <h1>Why are we here?</h1>
        <h2>Over the last century, our dependency on private cars has caused growing environmental, urban and societal problems. We're here to solve their root cause.</h2>
        <h4>Join us</h4>
        </div>
        </section>
        <div className='mission-image-container'>
        <img 
          src={before} 
          alt="before" 
          className='mission-before-image' 
          style={{ opacity: isInViewport ? 1 : 1 - scrolled }}
        />
        <img 
          src={after} 
          alt="after" 
          className='mission-after-image' 
          style={{ opacity: isInViewport ? 0 : scrolled }}
        />
      </div>
      <section  className='mission-section2'>
        <div  className='mission-section-container2'>
       <h1> Reversing car-dependency</h1>
       <h2>We offer alternatives to every purpose a private car serves. With affordable and convenient transport options at their fingertips, people can choose the mode that's best for their needs. And that's rarely their own car.
       </h2> 
        </div>
      </section>
    </div>
  )
}

export default Mission