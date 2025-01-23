import React, {useState} from "react";
import Footer from "../components/Footer";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

// TODO: Use this const for 1st General Meeting

// const events = [
//   {
//     date: "January 21, 2025",
//     time: "6:00-7:00PM",
//     name: "CareTech’s Introductory Meeting",
//     description:
//       "Come learn about what our club is about, meet our board and committees, and compete in Kahoot for amazing prizes!",
//     image: "", 
//   },
// ];


const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list"| "calendar">("list")

  const [date, setDate] = useState(() => {
    const today = new Date();
    return { month: today.getMonth(), year: today.getFullYear() };
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevMonth = () => {
    setDate((prevDate) => {
      const newMonth = prevDate.month === 0 ? 11 : prevDate.month - 1; // if month is january it goes to december
      const newYear = prevDate.month === 0 ? prevDate.year - 1 : prevDate.year; // if month is january it decrements the year
      return { month: newMonth, year: newYear };
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      const newMonth = prevDate.month === 11 ? 0 : prevDate.month + 1;
      const newYear = prevDate.month === 11 ? prevDate.year + 1 : prevDate.year;
      return { month: newMonth, year: newYear };
    });
  };

  return (
    <>
      <DetectScroll />
      <Navbar />
      <div className="min-h-screen w-full p-8">
        <h1 className="text-6xl sm:text-8xl mt-16 md:pt-24 text-center mb-4 sm:mb-8 font-jersey text-[#183054]">
          Events
        </h1>

        <p className="hidden md:block md:text-center text-xl sm:text-2xl font-montserrat text-primary sm:m-8">
          We host meetings in <strong>DBH 4011</strong> on <strong>Tuesdays 6:00-7:00PM</strong>! Meeting and event updates will be posted on Discord and Instagram, so be sure to follow us!
        </p>

        <div className="flex justify-between text-sm md:text-2xl font-medium text-[#183054] md:mt-14 md:p-5">
          <div className="flex flex-grow items-center gap-2 md:gap-4 md:ml-52">
            <span>{`${monthNames[date.month]} ${date.year}`}</span>
            <button
            className={`border border-[#294B7B] text-[#294B7B] text-xs md:text-base p-2 md:px-3 py-1 rounded-full hover:bg-[#294B7B] hover:text-white
              ${viewMode === "list" 
                ? "bg-[#294B7B] text-white" 
                : "text-[#294B7B] hover:bg-[#294B7B] hover:text-white"}`}
              onClick={() => setViewMode("list")}
            >
            Featured
          </button>
          <button
            className={`border border-[#294B7B] text-[#294B7B] text-xs md:text-base p-2 md:px-3 py-1 rounded-full hover:bg-[#294B7B] hover:text-white
              ${viewMode === "calendar" 
                ? "bg-[#294B7B] text-white" 
                : "text-[#294B7B] hover:bg-[#294B7B] hover:text-white"}`}
              onClick={() => setViewMode("calendar")}
            >
            Calendar
          </button>
          </div>

          <div className="flex gap-2 md:gap-4 md:mr-52">
            <button 
            className="text-xl md:text-2xl text-[#183054] hover:text-gray-500"
            onClick={handlePrevMonth}>
              {"<"}
            </button>
            <button 
            className="text-xl md:text-2xl text-[#183054] hover:text-gray-500"
            onClick={handleNextMonth}>
              {">"}
            </button>
          </div>
        </div>

        <hr className="w-full md:w-3/4 mt-2 md:mt-0 border border-black mx-auto" />

        {/* TODO: Make sure to implement EventList and EventCalendar */}
        {viewMode === "list" ? <EventCard /> : <div></div>}
      </div>
        <Footer />
    </>
  );
};

export default Events;


// PREVIOUSLY USED CODE, FOR REFERENCE
// const Event = ({ event }: { event: Event }) => {
//   return (
//     <div className="flex flex-col items-center p-4">
//       <div className="w-60 h-60 mb-4">
//         <img
//           src={event.image}
//           alt={`${event.name}`}
//           width={240}
//           height={240}
//           className="object-cover"
//         />
//       </div>

//       <h2 className="text-2xl text-[#183054] font-extrabold text-center mb-2">
//         {event.name}
//       </h2>
//       <p className="text-xl text-[#294B7B] font-semibold text-center mb-1">
//         {event.location}, {event.date.toDateString()}
//       </p>
//       <p className="text-md text-[#294B7B] font-light text-center">
//         {event.description}
//       </p>
//     </div>
//   );
// };

// interface Event {
//   image: string;
//   name: string;
//   location: string;
//   date: Date;
//   description: string;
// }

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