import React from 'react';
import '../landingpage/download/download.css'
import phoneImageRides from '../images/download/cta.webp'; // Rides image

const Download = () => {
  return (
    <section className="driver-download-section">
      <div className="driver-download-container">
       
        <div className="driver-cta-section">
          <div className="driver-cta-text">
            <h2>Be your own boss. Start driving and earning!.</h2>
            <p>It takes just 2 minutes to submit your information.</p>
            <button className="driver-cta-button">Apply online</button>
          </div>

          <div className="driver-cta-image">
            <img 
              src={phoneImageRides} 
              alt="Phone displaying the rides app" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
