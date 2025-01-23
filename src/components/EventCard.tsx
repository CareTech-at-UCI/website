const EventCard: React.FC = () => {
    const events = [
      {
        date: "January 21, 2025",
        time: "6:00-7:00PM",
        name: "CareTech’s Introductory Meeting",
        description:
          "Come learn about what our club is about, meet our board and committees, and compete in Kahoot for amazing prizes!",
        image: "/images/general_meeting_flyer.png",
      },
      // add more events here
    ];
  
    return (
        <div className="flex flex-col items-center mt-8 text-center md:text-left">
        {events.map((event, index) => (
            <div
            key={index}
            className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white p-6"
            >
            {/* Event Image */}
            <div className="w-full md:w-1/4 p-2">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 md:h-full object-cover rounded-md"
              />
            </div>
  
            {/* Event Details */}
            <div className="w-full md:w-3/4 p-4 flex flex-col">
              <p className="hidden md:block text-sm md:text-xl text-primary font-medium">
                {event.date} | {event.time}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-1 md:mt-3">
                {event.name}
              </h2>
              <p className="text-[#838FA5] mt-2 text-base md:text-xl">{event.description}</p>
              <p className="block md:hidden text-sm md:text-xl text-primary font-medium mt-1">
                {event.date} <br></br> {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default EventCard;
  