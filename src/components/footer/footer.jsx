import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='flex justify-center items-center content-end h-16 bg-black text-white'>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </div>
  );
};

export default Footer;
