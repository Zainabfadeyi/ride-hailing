import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { Button } from "../Button";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>QuickLift</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Resources</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          
        </div>
      </div>
      <section className="social-media">
       
        <section className='footer-subscription'>
        
    
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className="btn-link-btn">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="social-media-wrap">  
       
       <div className="social-icons">
      
         <Link
           className="social-icon-link"
           to="https://twitter.com/ZFadeyi"
           target="_blank"
           aria-label="Twitter"
         >
           <FaTwitter />
         </Link>
         <Link
           className="social-icon-link"
           to="/"
           target="_blank"
           aria-label="Facebook"
         >
           <FaFacebook />
         </Link>
         <Link
           className="social-icon-link"
           to="/"
           target="_blank"
           aria-label="Facebook"
         >
           <FaInstagram/>
         </Link>
         <Link
           className="social-icon-link"
           to="/"
           target="_blank"
           aria-label="Facebook"
         >
           <FaTiktok />
         </Link>
         <Link
           className="social-icon-link"
           to="https://www.linkedin.com/in/zainab-fadeyi-7443aa248/"
           target="_blank"
           aria-label="LinkedIn"
         >
           <FaLinkedin />
         </Link>
       </div>
     </div>
      </section>
    </div>
  );
};

export default Footer;
