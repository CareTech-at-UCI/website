import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start text-left bg-gray-50 p-12">
        <div className="max-w-screen-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 border-t border-black" />
            <h2 className="font-semibold text-2xl">CareTech At UCI.</h2>
          </div>
          <div className="space-x-4 mt-3"> 
              <h1 className="font-semibold text-8xl">Empowering early disease detection with innovative </h1>
              <h1 className="font-jersey text-8xl mr-4">tech </h1>
              <h1 className="font-semibold text-8xl mb-4">solutions</h1>
          </div>     
          <p className="font-normal max-w-2xl">
              Student-led Organization at UCI dedicated to creating innovative healthcare apps and tech solutions that can transform the way we approach health.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Get Involved
          </button>
        </div>
    </section>
  );
};

export default HeroSection;