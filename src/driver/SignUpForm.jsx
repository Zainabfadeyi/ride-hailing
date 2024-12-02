import React, { useState } from 'react';
import './driver.css'; // Add form styling here

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lagos');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ email, phone, city });
  };

  return (
    <div className="form-container">
      <h2>Become a driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
          className='email-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
            
          />
        </div>
        
        <div className="form-group">
          <label>Phone number</label>
          <div className="phone-input">
            <span>+234</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile number"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            
            <option value="Lagos">Abuja</option>
            <option value="Lagos">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Lagos">Ogun</option>
            <option value="Lagos">Oyo</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
        </div>

        <p>
          By registering, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy policy</a>.
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
