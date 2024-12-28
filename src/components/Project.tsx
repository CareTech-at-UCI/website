export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: Tag[];
}

export enum Tag {
  openSource = "Open Source",
  closedSource = "Closed Source",
  web = "Web",
  AI = "AI",
}

// If the size of the card is bothering us we need to change the image size cap and the text size cap in the card

// <div className="relative pb-[56.25%]">
// {" "}
// <img
//   src={image}
//   alt={title}
//   className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
// />
// </div>

function ProjectCard({ title, description, image, link, tags }: Project) {
  return (
    <div className="group flex flex-col md:flex-row rounded-lg border-[#294B7B] border-2 w-[90%] md:w-4/5 lg:w-3/4 transition-colors duration-300 hover:bg-[#294B7B]">
      <div className="md:w-1/3 p-2">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="md:w-2/3 flex flex-col justify-between p-4 text-secondary dark:text-secondary group-hover:text-white transition-colors duration-300">
        <div>
          <div className="flex flex-wrap gap-1 mb-1">
            {tags?.map((tag) => {
              let tagColor =
                "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200";
              switch (tag) {
                case Tag.openSource:
                  tagColor = "bg-[#92CC00] text-white";
                  break;
                case Tag.closedSource:
                  tagColor = "bg-red-500 text-white";
                  break;
                case Tag.AI:
                  tagColor = "bg-[#FF6600] text-white";
                  break;
                default:
                  tagColor =
                    "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200";
                  break;
              }
              return (
                <span
                  key={tag}
                  className={`${tagColor} rounded-full px-3 text-sm font-semibold transition-colors duration-300 group-hover:bg-primary group-hover:text-white`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <h2 className="text-xl lg:text-3xl font-bold mb-1 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-lg lg:text-xl transition-colors duration-300">
            {description}
          </p>
        </div>
        <div className="mt-2">
          <a href={link} className="text-blue-500 flex items-center">
            Project
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 ml-2"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
