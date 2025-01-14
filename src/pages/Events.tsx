import React from "react";
import Footer from "../components/Footer";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";

const Events: React.FC = () => {
  // const events: Event[] = [
  //   {
  //     image: "/images/placeholder-gray.png",
  //     name: "Event 1",
  //     location: "Location 1",
  //     date: new Date(),
  //     description: "Description for Event 1",
  //   },
  //   {
  //     image: "/images/placeholder-gray.png",
  //     name: "Event 2",
  //     location: "Location 2",
  //     date: new Date(),
  //     description: "Description for Event 2",
  //   },
  //   // Add more events as needed
  // ];

  // const itemsPerRow = 5;

  return (
    <>
      <DetectScroll />
      <Navbar />
      <div className="min-h-screen w-full p-8">
        <h1 className="text-6xl sm:text-8xl mt-16 md:pt-24 text-center mb-4 sm:mb-8 font-jersey text-[#183054]">
          Events
        </h1>
        <p className="text-center text-xl sm:text-2xl font-montserrat text-primary sm:m-8">
          We host meetings in <strong>DBH 4011</strong> on <strong>Tuesdays 6:00-7:00PM</strong>! Meeting and event updates will be posted on Discord and Instagram, so be sure to follow us!
        </p>
        <p className="text-center text-xl sm:text-2xl font-montserrat text-primary sm:m-8">No events so far! Check in later.</p>
        {/* PUT COMMENTED CODE AT BOTTOM WHEN EVENTS BEGIN/IF WE STILL USE THIS BESIDES CALENDAR */}
      </div>
        <Footer />
    </>
  );
};

export default Events;

const Event = ({ event }: { event: Event }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-60 h-60 mb-4">
        <img
          src={event.image}
          alt={`${event.name}`}
          width={240}
          height={240}
          className="object-cover"
        />
      </div>

      <h2 className="text-2xl text-[#183054] font-extrabold text-center mb-2">
        {event.name}
      </h2>
      <p className="text-xl text-[#294B7B] font-semibold text-center mb-1">
        {event.location}, {event.date.toDateString()}
      </p>
      <p className="text-md text-[#294B7B] font-light text-center">
        {event.description}
      </p>
    </div>
  );
};

interface Event {
  image: string;
  name: string;
  location: string;
  date: Date;
  description: string;
}

// {/* <div className="mx-4 px-4 justify-items-center">
//   <div className="grid grid-rows-auto gap-y-16 gap-x">
//     {Array.from(Array(Math.ceil(events.length / itemsPerRow))).map(
//       (_, rowIndex) => (
//         <div
//           key={rowIndex}
//           className="flex flex-row flex-wrap justify-center gap-8 font-normal"
//         >
//           {events
//             .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
//             .map((event, index) => (
//               <Event key={index} event={event} />
//             ))}
//         </div>
//       )
//     )}
//   </div> */}
// {/* </div> */}