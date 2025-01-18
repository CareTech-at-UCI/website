import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaLinkedin, FaTree, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
        <nav className="flex items-center z-50 justify-between px-8 py-3 xl:bg-transparent">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/caretech_nobackg.png" alt="CareTech Logo" className="w-30 h-12" />
            <div className="ml-4 font-semibold xl:text-lg lg:text-xl text-3xl">CareTech</div>
          </div>

          {/* Center Menu Links */}
          <ul className="hidden xl:flex items-center space-x-6 font-medium text-2xl mx-auto">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
            {/* <li>Join</li> */}
            <li><Link to="/ContactUs">Contact</Link></li>
          </ul>

          {/* Hamburger Icon */}
          <div className="ml-auto xl:hidden flex" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          {/* Social Media Icons */}
          <ul className="hidden xl:flex items-center space-x-5 font-medium">
            <li><a href="https://discord.gg/UZXpqynDzt" target="_blank" rel="noopener noreferrer"><FaDiscord size={30} /></a></li>
            <li><a href="https://www.linkedin.com/company/caretech-uci/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
            <li><a href="https://linktr.ee/caretechuci" rel="noopener noreferrer"><FaTree size={30} /></a></li>
            <li><a href="https://www.instagram.com/caretech_uci/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a></li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed xl:hidden flex flex-col items-center w-full z-10 left-0 bg-light-tan transition-transform ease-out duration-500
        ${isMenuOpen ? 'transform translate-y-16' : 'transform -translate-y-96'}`}
        ><ul className="py-5 space-y-5 text-[24px] font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
            <li>Join</li>
            <li><Link to="/ContactUs">Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;