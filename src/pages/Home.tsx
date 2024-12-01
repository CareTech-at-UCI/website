import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import DetectScroll from "../components/DetectScroll";
import Committees from '../components/Committees';
import Team from '../components/Team';

const Home: React.FC = () => {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <HeroSection />
      <Committees />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;