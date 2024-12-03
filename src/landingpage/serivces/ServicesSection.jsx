import React from 'react';
import './servicesSection.css'; // For custom styles
import RIDEPNG from '../../images/service/rides.png'
import BUSINESSPNG from '../../images/service/business.png'
import CARPNG from '../../images/service//car-sharing.png'
import DELIVERYPNG from '../../images/service/delivery.png'
import FOODPNG from '../../images/service/food.png'
import MICROPNG from '../../images/service/micromobility.png'
const services = [
  {
    title: 'Rides',
    description: 'Request in seconds, ride in minutes.',
    imgSrc: RIDEPNG
  },
  {
    title: 'Delivery',
    description: 'Your favorite food, delivered fast.',
    imgSrc:DELIVERYPNG
  },
  {
    title: 'Groceries',
    description: 'All the essentials whenever you need them.',
    imgSrc:FOODPNG
  },
  {
    title: 'Car-sharing',
    description: 'High-quality car rental made easy.',
    imgSrc: CARPNG
  },
  {
    title: 'Micromobility',
    description: '2-wheel ride rental at your fingertips.',
    imgSrc: MICROPNG
  },
  {
    title: 'Business',
    description: 'Manage business travel for your team and clients.',
    imgSrc:BUSINESSPNG,
  },
];

export const ServicesSection = () => {
  return (
    <section className="services-section">
      <div style={{width:"100%"}}>
      <h2>Our Services</h2>
      <p>Products and features vary by country. Some features listed here may not be available in your app.</p>
  
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">

            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className='service-icon-cover'>
            <img src={service.imgSrc} alt={`${service.title} icon`} className="service-image" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};


