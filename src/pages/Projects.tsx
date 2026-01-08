import DetectScroll from "../components/DetectScroll";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/Project";
import { type Project, Tag } from "../components/Project";

const projects: Project[] = [
  {
    title: "CareTech Website",
    description:
      "Want to learn more about how this website was made? Check it on our github! This website was made by the Tech Committee.",
    image: "/images/projects/website_cover.png",
    link: "https://github.com/CareTech-at-UCI/website",
    tags: [Tag.closedSource],
  },
  {
    title: "AI Melanoma Detection System",
    description:
      `In the Tech Committee, we built a machine learning model from scratch and linked it to a user-friendly interface. 
      A user uploads a photo, the model will predict the chances of lesion being melanoma. 
      The goal of this project is to have the Tech Committee learn about how ML models are made and 
      how they can be integrated into web applications while also promoting people to take charge in their health and 
      raise awareness on the dangers of melanoma.`,
    image: "/images/projects/melanoma_cover.png",
    link: "https://github.com/CareTech-at-UCI/melanoma-project",
    tags: [Tag.openSource, Tag.AI],
  },
];

function Projects() {
  return (
    <>
      <DetectScroll />
      <Navbar />
      <div className="text-center pt-12">
        <h1 className="text-6xl sm:text-8xl mt-8 sm:pt-20 md:pt-14 text-primary sm:mb-8 font-jersey">
          Projects
        </h1>
        <p className="text-secondary p-8 text-xl sm:text-2xl font-montserrat">
          Members of CareTech get hands on experience developing innovative apps
          that improve patient care and transform the way we approach health.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mx-auto p-3 mb-96 font-montserrat">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
