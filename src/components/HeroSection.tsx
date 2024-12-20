import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
    className="bg-[fffcf7] bg-cover bg-right bg-no-repeat h-screen flex flex-col items-start text-left p-12"
    style={{ 
      backgroundImage: "url('/images/dnastrand_bkg.png')",
      backgroundSize: "30%" }}
    >
        <div className="max-w-screen-lg pt-20">
          <div className="flex items-center space-x-4 pt-12">
            <div className="w-12 border-t border-black" />
            <h2 className="font-semibold text-2xl">CareTech At UCI.</h2>
          </div>
          <div className="mt-5"> 
            <h1 className="font-semibold text-8xl pl=10px">
            Empowering early disease detection with innovative{' '}
              <span className="font-jersey text-8xl">tech </span>
              <span className="font-semibold text-8xl">solutions</span>
            </h1>
          </div>     
          <p className="font-normal text-2xl mt-6">
              Student-led Organization at UCI dedicated to creating innovative healthcare apps and tech solutions that can transform the way we approach health.
          </p>
          
            <button className="flex mt-11 px-10 py-5 bg-sky-blue font-medium text-3xl rounded-3xl hover:bg-[#d4f4ff]">
                Get Involved
                <img className='w-fit h-fit my-auto pl-2' src="/icons/black_arrow.svg" alt="Arrow"></img>
            </button>
          
        </div>
    </section>
  );
};

export default HeroSection;