import React from 'react';
import './TeamsGrid.css';

const TeamCard = ({ title, description, imageUrl }) => {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={title} className="team-card-image" />
      <div className="team-card-content">
        <h3 className="team-card-title">{title}</h3>
        <p className="team-card-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;