import { Link } from "react-router-dom";

export interface Resource {
    title: string;
    description: string;
    image: string;
    link: string;
    tags?: (typeof Tag)[keyof typeof Tag][];
}
  
export const Tag = {
    openSource: "Open Source",
    closedSource: "Closed Source",
    web: "Web",
    AI: "AI",
} as const;

function ResourceCard({ title, description, image, link, tags }: Resource) {
    return (
        <div 
            className={`group flex flex-col rounded-lg w-full sm:w-44 md:w-1/3 lg:w-1/4 aspect-square`} 
            style={{ backgroundImage: `url(${image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'}}
        >
            <Link
              to={link}
              className="font-normal text-lg md:text-2xl text-[#BEEEFF] flex items-center justify-end"
            >
              <img
                className="size-7 m-3 hover:animate-bounce"
                src="/icons/white_arrow.svg"
                alt="WhiteArrowIcon"
              />
            </Link>
            <div className="flex flex-col justify-between p-4 text-secondary dark:text-secondary mt-auto">
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
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 text-[#FFFFFF]">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-[#FFFFFF]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;