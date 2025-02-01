export interface Event {
  date: string;
  time: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}


function EventCard({date, time, name, description, image, alt}: Event) {
  
    return (
        <div className="flex flex-col items-center mt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white p-6">

            {/* Event Image */}
            <div className="w-full md:w-1/4 p-2">
              <img
                src={image}
                alt={name}
                className="w-full h-40 md:h-full object-cover rounded-md"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-3/4 p-4 flex flex-col">
              <p className="hidden md:block text-sm md:text-xl text-primary font-medium">
                {date} | {time}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-1 md:mt-3">
                {name}
              </h2>
              <p className="text-[#838FA5] mt-2 text-base md:text-xl">{description}</p>
              <p className="block md:hidden text-sm md:text-xl text-primary font-medium mt-1">
                {date} <br></br> {time}
              </p>
            </div>
          </div>
        </div>
    );
  };
  
  export default EventCard;
  