import React from 'react';

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
          
          <ul className="font-medium flex space-x-6 mx-auto">
            <li>About</li>
            <li>Projects</li>
            <li>Events</li>
            <li>Resources</li>
            <li>Join</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;