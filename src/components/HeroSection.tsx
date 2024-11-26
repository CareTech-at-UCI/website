import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-left bg-gray-50 p-12">
        <div className="flex flex-nowrap space-x-4"> 
            <h1 className="font-semibold text-5xl">Empowering early disease detection with innovative </h1>
            <h1 className="font-jersey text-5xl mr-4">tech </h1>
            <h1 className="font-semibold text-5xl">solutions</h1>
        </div>     
        <p className="text-lg max-w-2xl">
            Student-led Organization at UCI dedicated to creating innovative healthcare apps and tech solutions that can transform the way we approach health.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Get Involved
        </button>
    </section>
  );
};

export default HeroSection;