import React from 'react';
import { FaDiscord, FaLinkedin, FaTree, FaInstagram } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center h-32 bg-dark-blue text-white">
      <div className="footer-left pl-10">
        <p>&copy; 2024 CARETECH. All Rights Reserved.</p>
        <p>Designed by Julia Nguyen</p>
        <p>Developed by Margaret Galvez, Nathan Ong, Priyansh Shah, Rushil Dileep</p>
      </div>
      <div className="footer-right pr-10">
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
          </ul>
      </div>
      
    </footer>
  );
};

export default Footer;