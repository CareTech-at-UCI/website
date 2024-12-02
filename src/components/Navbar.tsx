import React from 'react';
import { FaDiscord, FaLinkedin, FaTree, FaInstagram, FaTiktok } from 'react-icons/fa'


const Navbar: React.FC = () => {
    return (
      <header 
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
        <nav className="relative flex items-center px-8 py-5 bg-transparent">
          <div className="absolute left-8 flex items-center">
              <img src="/images/caretech_nobackg.png" alt="CareTech Logo" className="w-30 h-12"/>
              <div className="ml-4 font-semibold text-sm md:text-lg lg:text-xl text-3xl">CareTech</div>
          </div>
          
          <ul className="font-medium flex space-x-8 mx-auto">
            <li>About</li>
            <li>Projects</li>
            <li>Events</li>
            <li>Resources</li>
            <li>Join</li>
            <li>Contact</li>
          </ul>

          <ul className="font-medium flex space-x-5">
            <li>
              <FaDiscord size={30} />
            </li>
            <li>
              <FaLinkedin size={30} />
            </li>
            <li>
              <FaTree size ={30} />
            </li>
            <li>
              <FaInstagram size={30} />
            </li>
            <li>
              <FaTiktok size={30} />
            </li>
          </ul>

        </nav>
      </header>
    );
  };
  
  export default Navbar;