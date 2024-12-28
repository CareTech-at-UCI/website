import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetectScroll from "../components/DetectScroll";
import WhatEvents from '../components/WhatEvents';



const EventsPage: React.FC = () => {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <WhatEvents />
      <Footer />
    </div>
  );
};

export default EventsPage;

