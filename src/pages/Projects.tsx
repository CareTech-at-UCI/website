import React from "react";
import Committees from "../components/Committees";
import DetectScroll from "../components/DetectScroll";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import WhoWeAre from "../components/WhoWeAre";

function Projects() {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <h1 className="text-6xl sm:text-8xl mt-16 text-white text-center mb-8 font-jersey">
        Projects    
      </h1>
      <Committees />
      <Team />
      <Footer />
    </div>
  );
}

export default Projects;
