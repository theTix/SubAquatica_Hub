import React from 'react';
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <div className='footer--section'>
      <motion.div 
        className="footer--social--icons"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <FaFacebook className='footer--icon facebook' />
        <FaInstagram className='footer--icon instagram' />
        <FaYoutube className='footer--icon youtube' />
        <FaDiscord className='footer--icon discord' />
      </motion.div>
      <motion.div 
        className="footer--copyright"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h4>@SubAquatica Hub 2023</h4>
        <p>All Rights Reserved</p>
      </motion.div>
    </div>
  )
}

export default Footer