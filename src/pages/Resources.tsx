import React from "react";
import Footer from "../components/Footer";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/Resource";
import { Resource, Tag } from "../components/Resource";
import { Link } from "react-router-dom";


const resources: Resource[] = [
    {
      title: "Ojos Project",
      description:
        "A UCI-backed research endeavor in which they aim to understand the needs of hospice patients, caregivers, and healthcare specialists.",
      image: "/images/placeholder-gray.png",
      link: "https://www.google.com",
      tags: [Tag.openSource],
    },
    {
      title: "AlphaFold3",
      description:
        "The code underlying the Nobel-prize-winning tool for modelling protein structures can now be downloaded by academics.",
      image: "/images/placeholder-gray.png",
      link: "https://www.google.com",
      tags: [Tag.openSource, Tag.AI],
    },
    
  ];

function Resources() {
    return (
      <>
        <DetectScroll />
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="text-6xl sm:text-8xl text-primary font-jersey">
            Resources
          </h1>
          <p className="text-secondary p-8 text-xl sm:text-2xl font-montserrat">
            Check out our {" "}
            <Link
                to="https://www.youtube.com/@spencerwlam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0097FC] font-bold"
                >
                LinkTree
            </Link> for current opportunities!
          </p>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row justify-center gap-8 mx-10 p-3 mb-96 font-montserrat">
            {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
            ))}
        </div>
        <Footer />
      </>
    );
  }
  
  export default Resources;