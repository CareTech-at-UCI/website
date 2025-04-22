import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
    className="bg-[url('/public/images/dna_strand_mobile.png')] md:bg-[url('/public/images/dnastrand_bkg.png')] 
              bg-contain bg-top md:bg-right bg-no-repeat h-auto flex flex-col items-start text-left p-6 md:p-14"
    >
        <div className="sm:h-svh max-w-screen-lg pt-52 md:pt-20">
          <div className="flex items-center justify-center md:justify-normal space-x-2 md:space-x-4 pt-12">
            <div className="w-5 md:w-12 border-t border-black" />
            <h2 className="font-semibold text-2xl md:text-3xl">CareTech at UCI.</h2>
          </div>
          <div className="mt-3 md:mt-5"> 
            <h1 className="font-semibold text-4xl md:text-7xl md:leading-tight text-center md:text-left">
            Empowering early disease detection with innovative{' '}
              <span className="font-jersey text-5xl md:text-7xl">tech </span>
              <span className="font-semibold text-4xl md:text-7xl">solutions</span>
            </h1>
          </div>     
          <p className="font-normal text-sm md:text-2xl mt-6 text-center md:text-left">
              Student-led Organization at UCI dedicated to creating innovative healthcare apps and tech solutions that can transform the way we approach health.
          </p>
          
            {/* <a href="" target="_blank" rel="noopener noreferrer"> */}
              <p className="flex mt-6 md:mt-11 px-6 md:px-4 py-3 md:py-3 bg-sky-blue italic font-medium text-lg md:text-lg rounded-sm justify-self-center md:justify-self-start">
                Look out for applications in Fall Quarter
                {/* <img className='w-5 md:w-7 h-fit my-auto pl-2 hover:animate-bounce' src="/icons/black_arrow.svg" alt="Arrow"></img> */}
              </p>
            {/* </a> */}
          
        </div>
    </section>
  );
};

export default HeroSection;