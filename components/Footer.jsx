import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col sm:flex-row justify-between gap-14 text-sm">
        {/* Logo Section */}
        <div className="flex-1">
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            The forever is India's leading ecommerce site
          </p>
        </div>

        {/* Company Section */}
        <div className="flex-1">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="flex-1">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9894361046</li>
            <li>abinayav862@gmail.com</li>
            <br></br>
          </ul>
        </div>
      </div>
      <div>
        <br></br>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@forever.com - All Right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
