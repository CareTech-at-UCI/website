import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetectScroll from "../components/DetectScroll";
import WhoWeAre from "../components/WhoWeAre";
import Committees from '../components/Committees';
import Team from '../components/Team';

const About: React.FC = () => {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <WhoWeAre />
      <Committees />
      <Team />
      <Footer />
    </div>
  );
};

export default About;