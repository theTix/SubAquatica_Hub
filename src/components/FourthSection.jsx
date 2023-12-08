import React from 'react';
import "../styles/fourth-section.css";
import fish from "../assets/fish.png";
import jellyFish from "../assets/jellyfish.png";
import { motion } from 'framer-motion';

const FourthSection = () => {
  return (
    <div className='section--four' id='booking'>
      <img className='section--four--img fish' src={fish} alt="" />
      <img className='section--four--img jellyfish' src={jellyFish} alt="" />
      <div className="section--four--title">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Contact Us!
        </motion.h2>
      </div>
      <form className='section--four--form' action="" method='post'>
        <fieldset className='section--four--fieldset'>
          <label htmlFor="first-name"> <motion.input initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} id='first-name' type="text" placeholder='First Name' required /></label>
          <label htmlFor="last-name"> <motion.input initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} id='last-name' type="text" placeholder='Last Name' required /></label>
          <label htmlFor="email"> <motion.input initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2.5 }} id='email' type="text" placeholder='E-mail' required /></label>
          <label htmlFor="phone-number"> <motion.input initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 3 }} id='phone-number' type="text" placeholder='Phone Number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /></label>
        </fieldset>
        <motion.input initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }} className='section--four--submit--btn' type="submit" value="Submit"></motion.input>
      </form>
    </div>
  )
}

export default FourthSection