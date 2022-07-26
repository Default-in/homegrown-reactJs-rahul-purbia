import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navigation-bar">
            <ul className='navigation-links'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/about-us'>About Us</NavLink></li>
                <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar