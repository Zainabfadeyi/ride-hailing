import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer/Footer";
import '../styles/layout.css';





const LayoutAbout = () => {
  return (
    <div>
      <Navbar/>

      <div  className='layoutAbout'>
     <Outlet/>
    
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAbout;