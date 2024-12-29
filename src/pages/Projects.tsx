import DetectScroll from "../components/DetectScroll";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/Project";
import { Project, Tag } from "../components/Project";

const projects: Project[] = [
  {
    title: "CareTech Website",
    description:
      "A description of the project. Not sure if we should add the website to it but it is up to you all. If we do, we have to write a legitimate description.",
    image: "/images/caretech_logo.png",
    link: "https://www.google.com",
    tags: [Tag.closedSource],
  },
  {
    title: "Cancer Cure",
    description:
      "A description of the project. Not sure if we should add the website to it but it is up to you all. If we do, we have to write a legitimate description.",
    image: "/images/dna_bubbles.png",
    link: "https://www.google.com",
    tags: [Tag.openSource, Tag.AI],
  },
  {
    title: "CareTech Website",
    description:
      "A description of the project. Not sure if we should add the website to it but it is up to you all. If we do, we have to write a legitimate description.",
    image: "/images/caretech_logo.png",
    link: "https://www.google.com",
    tags: [Tag.closedSource],
  },
];

function Projects() {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <div className="text-center mt-28 mb-20 px-32">
        <h1 className="text-4xl sm:text-6xl text-primary mb-8 font-jersey">
          Projects
        </h1>
        <p className="text-secondary text-xl sm:text-2xl font-montserrat">
          Members of CareTech get hands on experience developing innovative apps
          that improve patient care and transform the way we approach health.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mx-auto p-3 mb-5 font-montserrat">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;