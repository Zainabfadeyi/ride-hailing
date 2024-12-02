import React, { useState } from 'react';
import './download.css'; // Add your styles here
import phoneImageRides from '../../images/download/desktop.webp'; // Rides image
import phoneImageDelivery from '../../images/download/desktop2.webp'; // Delivery image (adjust the path)

const Download = () => {
  const [activeTab, setActiveTab] = useState('Rides'); // To toggle between 'Rides' and 'Delivery'

  return (
    <section className="download-section">
      <div className="download-container">
        <h1 className="section-title">Download our apps</h1>

        <div className="toggle-buttons">
          <button 
            className={`toggle-button ${activeTab === 'Rides' ? 'active' : ''}`}
            onClick={() => setActiveTab('Rides')}
          >
            Rides
          </button>
          <button 
            className={`toggle-button ${activeTab === 'Delivery' ? 'active' : ''}`}
            onClick={() => setActiveTab('Delivery')}
          >
            Delivery
          </button>
        </div>

        <div className="cta-section">
          {activeTab === 'Rides' ? (
            <div className="cta-text">
              <h2>Request in seconds, ride in minutes.</h2>
              <p>Available for iOS and Android devices.</p>
              <button className="cta-button">Get the app</button>
            </div>
          ) : (
            <div className="cta-text">
              <h2>Your favourite food, delivered fast.</h2>
              <p>Available for iOS and Android devices.</p>
              <button className="cta-button">Get the app</button>
            </div>
          )}

          <div className="cta-image">
            <img 
              src={activeTab === 'Rides' ? phoneImageRides : phoneImageDelivery} 
              alt={activeTab === 'Rides' ? 'Phone displaying the rides app' : 'Phone displaying the delivery app'} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
