import React from "react";
import { Link } from "react-router-dom";

const Events: React.FC = () => {
  return (
    <section className="bg-white font-jersey p-10 md:p-20 h-auto flex justify-center">
      <div className="flex-col">
        <h2 className="text-5xl md:text-6xl mb-2 md:mb-4 text-center">
          Events
        </h2>
        <p className="font-normal text-sm md:text-2xl text-[#294B7B] mb-2 md:mb-6 text-center">
          We host events in DBH 3011 on Mondays 6:00-7:00PM!
        </p>
        <div className="flex justify-center mb-32">
          <Link
            to="/Events"
            className="font-normal text-lg md:text-2xl text-[#0097FC] flex items-center"
          >
            View All Events
            <img
              className="size-10 md:w-fit md:h-fit hover:animate-bounce"
              src="/icons/blue_arrow.svg"
              alt="BlueArrowIcon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
