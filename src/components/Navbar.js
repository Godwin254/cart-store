import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import { IoMdArrowDropdown, IoIosArrowForward } from 'react-icons/io';
import { SiWebmoney } from 'react-icons/si';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={require('../image/logo.png')} alt="img-logo" />
            </div>
            <div className='navbar-links'>
                <div className='btns'>
                    <Link to='/learn-more'>Learn More <IoMdArrowDropdown className="fa"  /> </Link>
                    <Link to='/shop'> <SiWebmoney className="fa"  /> </Link>
                </div>

                <div className="links">
                    <Link to="/products">Product</Link>
                    <Link to="/my-cart">My Cart</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/search"><BsSearch className="fa" /> </Link>
                    <Link to="/login">Login <IoIosArrowForward className="fa"/> </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;