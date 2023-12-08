import React from 'react';
import { FaBars } from 'react-icons/fa6';
import "../styles/navbar.css";

const NavBar = ({ navBar, handleClick }) => {
  return (
    <div className={navBar ? "hamburger--content" : "no--hamburger"}>
        <FaBars className='nav--hamburger--menu--icon' onClick={handleClick} />
        <h2>SubAquatica Hub</h2>
        <a href="#section--one--about" onClick={handleClick}>About</a>
        <a href="#section--two--offers" onClick={handleClick}>Offers</a>
        <a href="#reviews" onClick={handleClick}>Reviews</a>
        <a href="#booking" onClick={handleClick}>Booking</a>
    </div>
  )
}

export default NavBar