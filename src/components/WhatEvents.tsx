import React from 'react';




const WhatEvents: React.FC = () => {
  return (
    <section className="bg-white font-jersey p-20 mt-12 h-[80vh] mb-11 flex justify-center">
        <div className="flex-col mt-10">
            <h2 className="text-6xl text-center" style={{ fontWeight: 'lighter' }}><b>Events</b></h2>
            <div className="flex justify-between">
                <p className="font-normal text-2xl text-dark-blue mt-10 text-center">
                We host events in <b>[Location]</b> at <b>[time and day]</b>! Event updates will be posted on Discord and Instagram, so be sure to follow us!
                </p>
            </div>
            <div className='flex justify-center'>
                <p className='font-normal text-3xl mt-20 text-center'>
                    No events so far.
                </p>
            </div>
        </div>
    </section>
  );
};

export default WhatEvents;

