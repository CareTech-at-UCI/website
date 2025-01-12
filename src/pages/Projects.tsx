import DetectScroll from "../components/DetectScroll";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/Project";
import { Project, Tag } from "../components/Project";

const projects: Project[] = [
  {
    title: "CareTech Website",
    description:
      "Want to learn more about how this website was made? Check it on our github! This website was made by the Tech Committee.",
    image: "/images/caretech_logo.png",
    link: "https://github.com/CareTech-at-UCI/website",
    tags: [Tag.closedSource],
  },
  {
    title: "AI Melanoma Detection System",
    description:
      "This project is based off a research paper where we will build a machine learning model and a user-friendly interface. The user will input images and the model will predict the detect the chances of it being melanoma. The Tech Committee will work on this project until the end of the 2025 academic year.",
    image: "/images/dna_bubbles.png",
    link: "https://www.google.com",
    tags: [Tag.openSource, Tag.AI],
  },
];

function Projects() {
  return (
    <>
      <DetectScroll />
      <Navbar />
      <div className="text-center pt-20">
        <h1 className="text-6xl sm:text-8xl text-primary sm:mb-8 font-jersey">
          Projects
        </h1>
        <p className="text-secondary p-8 text-xl sm:text-2xl font-montserrat">
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
    </>
  );
}

export default Projects;
