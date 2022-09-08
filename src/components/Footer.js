import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';

 function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <MdOutlineKeyboardArrowUp className='nav-top' />
            <div className="sideA">
                <img src={require('../image/logo.png')} alt="logo" />
                <p>
                    Creating opportunities for customers, investors,
                    financiers and vendors, to connect around renewable energy 
                    solutions.

                </p>
                
                    <span>
                        info@yellowdotenergy.com
                    </span>
                    <b>
                        +254 123 45678
                    </b>
                    
               

            </div>
            <div className="sideB">
                <div className="services">
                    <h1>Services</h1>
                    <div className="category">
                        <div className='sub-category'>
                            <h3>Agribusinness</h3>
                            <ul>
                                <li>Solar PV panels</li>
                                <li>Solar PV panels</li>
                                <li>Solar PV panels</li>
                                <li>Solar PV panels</li>
                            </ul>
                        </div>
                        <div className='sub-category'>
                              <h3>Agribusinness</h3>
                              <ul>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                              </ul>
                         </div>
                          <div className='sub-category'>
                              <h3>Agribusinness</h3>
                              <ul>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                              </ul>
                          </div>
                          <div className='sub-category'>
                              <h3>Agribusinness</h3>
                              <ul>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                                  <li>Solar PV panels</li>
                              </ul>
                          </div>

                    </div>
                    
                </div>
                <div className="links">
                    <h1>Useful Links</h1>
                    <div>
                        <Link to="/about-us">About us</Link>
                        <Link to="/latest-product">Latest</Link>
                        <Link to="/terms-condition">Terms & Condition</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>

                    </div>
                </div>

            </div>

        </div>
        <div className="bottom">
            <img src={require('../image/Playstore.png')} alt="img" />
            <div className="icons">
                <BsFacebook className='icon' />
                <AiFillInstagram className='icon' />
                <AiFillTwitterCircle  className='icon' />

            </div>

        </div>

        
    </div>
  )
}

export default Footer;
