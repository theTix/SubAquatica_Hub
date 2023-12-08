import React, { useEffect, useState } from 'react';
import "../styles/first-section.css";
import underwaterImg from "../assets/underwater4.png";

const FirstSection = () => {

  return (
    <div className='section--one' id='section--one--about'>
        <div className="section--one--text">
            <h1>SubAquatica Hub</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae velit sapiente id repellendus dignissimos, expedita facere maiores deserunt hic ipsa voluptas temporibus quaerat explicabo nulla magni corporis enim qui?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate in possimus consequuntur repudiandae laboriosam eligendi culpa incidunt aspernatur tempore dicta?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In animi autem, totam sit reprehenderit facere dolorum voluptas id eius quisquam minus nobis nemo iure!</p>
        </div>
        <img className='section--one--img' src={underwaterImg} alt="" />
    
    </div>
  )
}

export default FirstSection;