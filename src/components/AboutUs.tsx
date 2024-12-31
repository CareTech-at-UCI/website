import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-black to-[#294B7B] font-jersey p-12 h-auto">
      <div className="mx-auto grid-cols-1 md:flex md:grid-cols-2 items-center justify-items-center md:justify-between gap-16 h-auto">
        <div className="text-center md:text-left justify-items-center md:justify-items-start flo-row md:flex-col md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">About Us</h2>
            <p className="font-normal text-sm md:text-2xl text-white">
            From developing apps that improve patient care to partnering with companies shaping the 
            future of healthcare, we’re here to make a real difference.
            </p>
          <div className="flex mt-6 gap-2">
            <Link
              to="/About"
              className="font-normal text-lg md:text-2xl text-[#BEEEFF] flex items-center"
            >
              More
              <img
                className="size-4 md:w-fit md:h-fit ml-2"
                src="/icons/lightblue_arrow.svg"
                alt="LightBlueArrowIcon"
              />
            </Link>
          </div>
        </div>
        <div className="flex my-6 md:w-1/2">
            <img 
              className="w-full rounded-xl"
              src="/images/dna_bubbles.png"
              alt="DNABubbleImg"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
