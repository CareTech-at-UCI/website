import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaLinkedin, FaTree, FaInstagram } from 'react-icons/fa'

// Add FaTiktok to import if we ever make a TikTok


const Navbar: React.FC = () => {
    return (
      <header 
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
        <nav className="relative flex items-center px-8 py-3 bg-transparent">
          <div className="relative left-8 flex items-center">
              <img src="/images/caretech_nobackg.png" alt="CareTech Logo" className="w-30 h-12"/>
              <div className="ml-4 font-semibold text-sm md:text-lg lg:text-xl text-3xl">CareTech</div>
          </div>
          
          <ul className="font-medium text-2xl flex space-x-8 mx-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>Projects</li>
            <li>Events</li>
            <li>Resources</li>
            <li>Join</li>
            <li>Contact</li>
          </ul>

          <ul className="font-medium flex space-x-5">
            <li>
              <a href="https://discord.gg/UZXpqynDzt" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/caretech-uci/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                <FaTree size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/caretech_uci/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </li>
            {/* <li>
              <a href="#" rel="noopener noreferrer">
                <FaTiktok size={30} />
              </a>
            </li> */}
          </ul>


        </nav>
      </header>
    );
  };
  
  export default Navbar;