import React from 'react'
import Testimonials from './homePage/Testimonials'
import HeroSection from './HeroSection'
import { Banner } from './banner/Banner';
import Info from './banner/Info';
import { ServicesSection } from './serivces/ServicesSection';
import Download from './download/Download';
import '../styles/layout.css'

const Home = () => {

  return (  
    <div className='home'>   
      <HeroSection>
         <Banner/>
          <Info/>
         <ServicesSection/>
         <div className='space' ></div>
        <Testimonials />
        <Download/>
      </HeroSection>
    </div>
  );
};


export default Home