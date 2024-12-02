import React from 'react'
import Testimonials from './homePage/Testimonials'
import HeroSection from './HeroSection'
import { Banner } from './banner/Banner';
import Info from './banner/Info';
import { ServicesSection } from './serivces/ServicesSection';
import Download from './download/Download';


const Home = () => {

  return (  
    <>   
      <HeroSection>
         <Banner/>
          <Info/>
         <ServicesSection/>
        <Testimonials />
        <Download/>
      </HeroSection>
    </>
  );
};


export default Home