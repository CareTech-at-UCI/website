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
    ];
  
    return (
        <div className="flex flex-col items-center mt-8">
        {events.map((event, index) => (
            <div
            key={index}
            className="flex items-center w-full max-w-4xl bg-white p-6"
            >
            {/* Event Image */}
            <div className="md:w-1/4 p-2">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
  
            {/* Event Details */}
            <div className="md:w-3/4 p-4 flex flex-col">
              <p className="text-lg text-primary font-medium md:text-xl">
                {event.date} | {event.time}
              </p>
              <h2 className="md:text-3xl font-semibold text-primary mt-3">
                {event.name}
              </h2>
              <p className="text-[#838FA5] mt-2 md:text-xl">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default EventCard;
  