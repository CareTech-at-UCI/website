import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Events from '../components/Events'
import Footer from '../components/Footer';
import DetectScroll from "../components/DetectScroll";
import WhoWeAre from "../components/WhoWeAre"
import Committees from '../components/Committees';
import Team from '../components/Team';

const Home: React.FC = () => {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Events />
      <WhoWeAre />
      <Committees />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;