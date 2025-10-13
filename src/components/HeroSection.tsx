import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
    className="bg-[url('/public/images/dna_strand_mobile.png')] md:bg-[url('/public/images/dnastrand_bkg.png')] 
              bg-contain bg-top md:bg-right bg-no-repeat h-auto flex flex-col items-start text-left p-6 md:p-14"
    >
        <div className="sm:h-svh max-w-screen-lg lg:pt-16 md:pt-40 sm:pt-72 pt-60">
          <div className="flex items-center justify-center md:justify-normal space-x-2 md:space-x-4 pt-12">
            <div className="w-5 md:w-12 border-t border-black" />
            <h2 className="font-semibold text-2xl md:text-3xl">CareTech at UCI.</h2>
          </div>
          <div className="mt-3 md:mt-5"> 
            <h1 className="font-semibold md:text-6xl text-2xl md:leading-tight md:text-left text-center ">
            Empowering early disease detection with innovative{' '}
              <span className="font-jersey md:text-6xl text-5xl ">tech </span>
              <span className="font-semibold md:text-6xl text-4xl ">solutions</span>
            </h1>
          </div>     
          <p className="font-normal text-sm md:text-2xl mt-6 text-center md:text-left">
              Student-led Organization at UCI dedicated to creating innovative healthcare apps and tech solutions that can transform the way we approach health.
          </p>
          
          <div className="flex-col">
            <p className="
                flex flex-wrap
                mt-6 md:mt-11 
                px-3 md:px-4 lg:px-6 
                py-2 md:py-3 
                bg-sky-blue 
                font-medium 
                text-sm sm:text-base md:text-lg lg:text-xl 
                rounded-sm 
                text-center md:text-left
            ">
              Applications are now closed! 
              {/* Apply here:{' '}
              <a
                href="https://forms.gle/yqa9Fg6aAyu8SPSG9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 break-words ml-1"
              >
                https://forms.gle/yqa9Fg6aAyu8SPSG9 */}
              {/* </a> */}
            </p>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;