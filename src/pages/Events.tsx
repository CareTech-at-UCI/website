import React from "react";
import Footer from "../components/Footer";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";
import Event from "../components/Events";

const Events: React.FC = () => {
  return (
    <>
      <DetectScroll />
      <Navbar />
      <Event />
      <Footer />
    </>
  );
};

export default Events;
