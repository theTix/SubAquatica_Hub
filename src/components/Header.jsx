import React from 'react';
import { FaBars, FaDisplay, FaFishFins } from 'react-icons/fa6';
import "../styles/header.css";
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Header = () => {
    const [ navBar, setNavBar ] = useState(false);
    const [ menuBar, setMenuBar ] = useState(true);
    const [ isBlurred, setIsBlurred ] = useState(false);
    const [ isWide, setIsWide ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollTreshold = 800;

            setIsBlurred(scrollPosition < scrollTreshold);
            setIsWide(scrollPosition >= scrollTreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleClick() {
       navBar ? setNavBar(false) : setNavBar(true);
       menuBar ? setMenuBar(false) : setMenuBar(true);
    }

  return (
    <div className={`header--container ${isWide ? 'wide' : ''}`}>
        <div className="header--title">
            <h1>SubAquatica Hub</h1>
            <FaFishFins className='header--icon' />
        </div>

        <nav className="header--nav">
            <a href="#section--one--about">About</a>
            <a href="#section--two--offers">Offers</a>
            <a href="#reviews">Reviews</a>
            <a href="#booking">Booking</a>
        </nav>

        <div className="hamburger--menu" >
            <FaBars className='hamburger--menu' onClick={handleClick} style={{display: menuBar ? "flex" : "none"}} />
        </div>

        <NavBar navBar={navBar} handleClick={handleClick} />

        
    </div>
  )
}

export default Header