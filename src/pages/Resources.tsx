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
        "A UCI-backend research endeavor in which they aim to understand the needs of hospice patients, caregivers, and healthcare specialists.",
      image: "/images/ojos_opensource.png",
      link: "https://ojosproject.org/",
      tags: [Tag.openSource],
    },
    {
      title: "AlphaFold3",
      description:
        "The code underlying the Nobel-prize-winning tool for modelling protein structures can now be downloaded by academics.",
      image: "/images/alpha3.png",
      link: "https://www.nature.com/articles/d41586-024-03708-4?utm_source=tldrai",
      tags: [Tag.openSource, Tag.AI],
    },
    
  ];

function Resources() {
    return (
      <>
        <DetectScroll />
        <Navbar />
        <div className="text-center pt-20">
          <h1 className="text-6xl sm:text-8xl text-primary font-jersey">
            Resources
          </h1>
          <p className="text-secondary p-8 text-xl sm:text-2xl font-montserrat">
            Check out our {" "}
            <Link
                to="https://linktr.ee/caretechuci"
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