// import React from "react"
// import Back from "./Back"
// import Heading from "./Heading"
// import img from "../images/home/user-four.png"
// import "./about.css"
// import videoFile from '../images/assets/video.mp4'
// const About = () => {
//   return (
//     <>
//       <section className='about'>
//       <div className="video-container">
//           <video autoPlay loop muted>
//           <source src={videoFile} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div>

//         {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
//         </div>
//         <div className='container flex mtop'>
//           <div className='left row'>
//             <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
//             <button className='btn2'>More About Us</button>
//           </div>
//           <div className='right row'>
//             <img src='./immio.jpg' alt='' />
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default About


import React, { useEffect } from "react";
import Heading from "./Heading";
import videoFile from '../images/assets/video.mp4';
import "./about.css";
import { ServicesSection } from "../landingpage/serivces/ServicesSection";
import PicSlides from "./Slides/PicSlides";
import Values from "./Slides/Values";
import Mission from "./missions/Mission";

const About = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.aboutContainer');

      if (container) { // Check if container exists
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollTop > viewportHeight / 4) { // Trigger content after scrolling down a bit
          container.classList.add('visible');
        } else {
          container.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className='about'>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='aboutContainer flex mtop'>
          <div className='left-row'>
              <h1>  We are Quicklift</h1>
              <h3>We’re passionate about solving problems. We take on challenges others consider impossible.</h3>
                
          </div>
          <p>At a glance</p>
          <div className='right-row'>
          
          <div className="right-row-wrapper">
              <div className="right-row-wrapper-item">
                <h1>50+</h1>
                <h3>Nationalities</h3>
              </div>
              <div className="right-row-wrapper-item">
                <h1>31</h1>
                <h3>Average age( yrs)</h3>
              </div>
              <div className="right-row-wrapper-item">
                <h1>42%</h1>
                <h3>Women</h3>
              </div>
              </div>
              
       
          </div>
        </div>
      </section>
      <Mission/>
      <Values/>
      <PicSlides/>
    
    </>
  );
};

export default About;
