import React from "react";

interface EventProps {
  event: {
    date: string;
    time: string;
    name: string;
    description: string;
    image: string;
    alt: string;
    location?: string;
    ctaLabel?: string;
    ctaLink?: string;
  };
}

const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="flex flex-col items-center mt-8 text-center md:text-left">
      <div className="group flex flex-col md:flex-row items-center w-full max-w-4xl bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5">
        {/* Event Image */}
        <div className="w-full md:w-1/4 p-2">
          <img src={event.image} alt={event.alt} className="w-full h-40 md:h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-[1.01]" />
        </div>

        {/* Event Details */}
        <div className="w-full md:w-3/4 p-4 flex flex-col">
          <p className="hidden md:block text-sm md:text-xl text-primary font-medium">
            {event.date} | {event.time}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-1 md:mt-3">{event.name}</h2>
          <p className="text-[#838FA5] mt-2 text-base md:text-xl">{event.description}</p>
          {event.location && (
            <p className="mt-2 text-sm md:text-base font-medium text-[#294B7B]">
              Location: {event.location}
            </p>
          )}
          <p className="block md:hidden text-sm md:text-xl text-primary font-medium mt-1">
            {event.date} <br /> {event.time}
          </p>
          {event.ctaLink && (
            <a
              href={event.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-[#294B7B] px-5 py-2 text-sm md:text-base font-semibold text-white hover:bg-[#183054] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {event.ctaLabel || "Learn More"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
