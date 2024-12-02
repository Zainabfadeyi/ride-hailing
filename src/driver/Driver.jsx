import React from 'react';
import SignUpContent from './SignUpContent';
import SignUpForm from './SignUpForm';
import './driver.css';
import header from '../images/assets/header-2.webp';
import DriverBenefits from './DriverBenefits';
import Download from './Download';

const Driver = () => {
  return (
    <>
      <div className='driver-container'>
        <div className="overlay">
          <div className="left-side">
            <SignUpContent />
          </div>
          <div className="right-side">
            <SignUpForm />
          </div>
        </div>
      </div>
      <DriverBenefits />
      <Download/>
    </>
  );
}

export default Driver;
