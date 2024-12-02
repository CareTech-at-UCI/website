import React from 'react';

const Events: React.FC = () => {
  return (
    <section className="bg-white font-jersey p-16 h-[60vh] flex justify-center">
       <div className="flex-col">
        <h2 className="text-6xl mb-4 text-center">Events</h2>
        <p className="font-normal text-2xl text-[#294B7B] mb-6">
          We host events in [Location] at [time and day]!
        </p>
        <div className="flex mt-6 justify-center">
            <button
            className="font-normal text-2xl text-[#0097FC]"
            >
            View All Events
            </button>
            <img className='w-fit h-fit my-auto' src="/icons/blue_arrow.svg"></img>
        </div>
      </div>
    </section>
  );
};

export default Events;
