import React from 'react';

const Navbar: React.FC = () => {
    return (
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center">
            <img src="/images/caretech_nobackg.png" alt="CareTech Logo" className="w-30 h-12"/>
            <div className="ml-4 font-semibold text-sm md:text-lg lg:text-xl text-3xl">CareTech</div>
        </div>
        
        <ul className="font-medium flex space-x-6">
          <li>About</li>
          <li>Projects</li>
          <li>Events</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;