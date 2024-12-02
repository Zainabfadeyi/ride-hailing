import React from 'react';
import './driver.css'; // Assuming the styles will be added here
import { FaCalendar, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { TbBrandOpenSource } from 'react-icons/tb';

const DriverBenefits = () => {
  return (
    <section className="driver-benefits-section">
      <div className="driver-benefits-container">
        <h2 className="driver-benefits-title">Why become a Bolt driver?</h2>
        <p className="driver-benefits-description">
          Whether you want to drive for a few hours occasionally or want to earn money more frequently, with Bolt you can fit driving around your schedule.
        </p>
        <div className="driver-benefits-list">
          <div className="driver-benefit">
            <div className="driver-benefit-icon">
            <FaCalendar />
            </div>
            <h3 className="driver-benefit-title">Drive and earn when you like</h3>
            <p className="driver-benefit-description">
              Earn during evenings and weekends, or make more money by driving more frequently. It's up to you.
            </p>
          </div>
          <div className="driver-benefit">
            <div className="driver-benefit-icon">
            <TbBrandOpenSource />
            </div>
            <h3 className="driver-benefit-title">A reliable source of income</h3>
            <p className="driver-benefit-description">
              You’ll receive orders from our large network of riders anytime you're online.
            </p>
          </div>
          <div className="driver-benefit">
            <div className="driver-benefit-icon">
            <FaMoneyBillWaveAlt />
            </div>
            <h3 className="driver-benefit-title">Weekly payouts</h3>
            <p className="driver-benefit-description">
              Receive your earnings at the end of each week. There are no hidden subscription fees and you’ll only pay commission on your earnings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DriverBenefits;
