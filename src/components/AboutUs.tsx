import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-black to-[#294B7B] font-jersey p-12 h-[50vh]">
      <div className="mx-auto flex md:flex-row items-center justify-between gap-8">
        <div className="flex-col w-1/2">
          <h2 className="text-6xl font-bold mb-4 text-white">About Us</h2>
            <p className="font-normal text-2xl text-white">
            From developing apps that improve patient care to partnering with companies shaping the 
            future of healthcare, we’re here to make a real difference.
            </p>
          <div className="flex mt-6 gap-2">
            <button
              className="font-normal text-2xl text-[#BEEEFF]"
            >
              More
            </button>
            <img className='w-fit h-fit my-auto' src="/icons/lightblue_arrow.svg" alt="LightBlueArrowIcon"></img>
          </div>
        </div>
        <div className="flex w-1/2">
            <img 
            className="w-full"
            src="/images/dna_bubbles.png"
            alt="DNABubbleImg"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
