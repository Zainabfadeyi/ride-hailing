import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ArrowBarRight } from "react-bootstrap-icons";
import { IoMdPerson } from "react-icons/io";
import { LuBike } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false); // State to manage dropdown visibility

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setDropdown(!dropdown); // Function to toggle dropdown

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "" }}>
        <nav className="navbar">
          <div className="navbar-container Navcontainer">
            {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> */}
            <Link to="/" className="navbar-logo" onClick={() => {
              scrollToTop();
              closeMobileMenu();
            }}>
            QuickLift
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
           
              
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav-menu-item">
              {/* <Link to= './About-us' className="nav-links">About </Link> */}
              <Link to="/About-us" className="nav-links" onClick={() => {
                  scrollToTop();
                  closeMobileMenu();
                }}>
                  About
                  </Link>
                <div className="nav-links">Support</div>
                <div className="nav-links">Resources</div>
              </div>
              <div style={{display:"flex"}}>
            
              <li className="nav-btn">
                {button ? (
                     <div className="btn-link">
                     <button
                       className="btn-link-btn"
                       onClick={toggleDropdown} // Toggle the dropdown visibility
                     >
                       Get Started
                     </button>
                     {/* Dropdown menu */}
                     {dropdown && (
                       <div className="dropdown-menu">
                         <div className="navbar-dropdown-item">
                          <div ><IoMdPerson style={{color:"blue"}} /></div>
                          {/* <Link to='/Driver-registration' className="dropdown-item-name"
                          
                          > */}
                           <Link to="/Driver-registration" className="dropdown-item-name" onClick={() => {
                              scrollToTop();
                              closeMobileMenu();
                            }}>
                            <div className="dropdown-item-text">
                            <div className="top">Become a driver</div>
                            <div  className="bottom">Make money on your terms</div>
                            </div>
                            <div>
                            <FaArrowRight  style={{color:"black"}} />
                            </div>
                          </Link>
                          </div>
                         <div className="navbar-dropdown-item">
                         <div><LuBike style={{color:"green"}}/>
                         </div>
                          <div  className="dropdown-item-name">
                            <div className="dropdown-item-text">
                            <div className="top">Become a courier</div>
                            <div className="bottom">Make money on your terms</div>
                            </div>
                            <div>
                            <FaArrowRight   style={{color:"black"}}/>
                            </div>
                          </div>
                         </div>
                         <div className="navbar-dropdown-item">
                         <div ><ImSpoonKnife style={{color:"green"}}/></div>
                          <div  className="dropdown-item-name">
                            <div className="dropdown-item-text">
                            <div className="top">Add a restaurant</div>
                            <div className="bottom">Make money on your terms</div>
                            </div>
                            <div>
                            <FaArrowRight style={{color:"black"}}/>
                            </div>
                          </div>
                          </div>
                       </div>
                     )}
                   </div>
                ) : (
                  <Link to="/Driver-registration" className="btn-link">
                    <button
                     className="nav-button"
                     onClick={() => {
                      scrollToTop();
                      closeMobileMenu();
                    }}
                    >
                      Get Started
                    </button>
                  </Link>
                )}
              </li>
              </div>
            </ul>
          
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

  export default Navbar;