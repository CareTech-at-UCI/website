import React from "react";
import { FaDiscord, FaLinkedin, FaTree, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center min-h-32 bg-dark-blue text-white px-4 py-6 md:px-10">
      <div className="footer-left text-center md:text-left mb-6 md:mb-0">
        <p className="mb-2">&copy; 2024 CARETECH. All Rights Reserved.</p>
        <p className="mb-2">Designed by Julia Nguyen</p>
        <p className="text-sm md:text-base">
          Developed by Margaret Galvez, Nathan Ong, Priyansh Shah, Rushil Dileep
        </p>
      </div>

      <div className="footer-right">
        <ul className="font-medium flex space-x-6 md:space-x-5">
          <li>
            <a
              href="https://discord.gg/UZXpqynDzt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaDiscord size={28} className="md:w-8 md:h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/caretech-uci/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaLinkedin size={28} className="md:w-8 md:h-8" />
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaTree size={28} className="md:w-8 md:h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/caretech_uci/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={28} className="md:w-8 md:h-8" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
