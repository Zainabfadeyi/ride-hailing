import React from 'react';
import './TeamsGrid.css';
import TeamCard from './TeamCard';
import slide_image_1 from '../../images/teams/legalRiskPrivacy.webp';
import slide_image_2 from '../../images/teams/customerSupport.webp';
import slide_image_3 from '../../images/teams/peopleWorkplace.webp';
import slide_image_4 from '../../images/teams/engineering.webp';
import slide_image_5 from '../../images/teams/regulatoryPublicPolicy.webp';
import slide_image_6 from '../../images/teams/businessOperations.webp';



const teamsData = [
  {
    title: "Legal, Risk & Privacy",
    description:
      "The legal, Risk, and Privacy teams work with all functions to ensure Bolt complies with laws...",
    imageUrl: slide_image_1
  },
  {
    title: "Customer Support",
    description:
      "Our Support teams are essential in improving our offers as we communicate with customers...",
    imageUrl: slide_image_2
  },
  {
    title: "People & Workplace",
    description:
      "The People and Workplace team attract top talent and support our people's growth...",
    imageUrl: slide_image_3
  },
  {
    title: "Document Fraud",
    description: "Ensuring data accuracy and fighting fraud across various operations...",
    imageUrl: slide_image_4
  },
  {
    title: "Data Analytics",
    description: "Analyzing data to inform business decisions and strategy...",
    imageUrl: slide_image_5
  },
  {
    title: "Operations",
    description: "Optimizing processes and logistics for better efficiency...",
    imageUrl: slide_image_6
  },
];

const TeamsGrid = () => {
  return (
    <div className="teams-grid-container">
        <div className='teams-card-wrapper'>
            <h1>
            Teams
            </h1>
            <p>
            We’re looking for people who think systematically, learn fast, and execute their ideas. You’ll be surrounded by great minds who’ll raise you up, and push you to achieve extraordinary things! We want to work with people who show empathy and are honest.
            </p>
        </div>
        <div  className="teams-grid">
      {teamsData.map((team, index) => (
        <TeamCard
          key={index}
          title={team.title}
          description={team.description}
          imageUrl={team.imageUrl}
        />
      ))}
      </div>
    </div>
  );
};

export default TeamsGrid;
