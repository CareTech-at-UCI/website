import React, {useState} from "react";
import Footer from "../components/Footer";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

const events = [
  {
    date: "January 28, 2025",
    time: "6:00-7:00PM",
    name: "Dataset Manipulation Workshop",
    description:
      "Get hands-on experience exploring basics of machine learning and handling datasets using Python/R",
    image: "/images/meeting_graphics/data_manipulation_workshop.png",
    alt: "Image of Data Manipulation Workshop Graphic with a Cool Robotic Hand"
  },
  {
    date: "January 21, 2025",
    time: "6:00-7:00PM",
    name: "CareTech’s Introductory Meeting",
    description:
      "Come learn about what our club is about, meet our board and committees, and compete in Kahoot for amazing prizes!",
    image: "/images/meeting_graphics/general_meeting_1.png",
    alt: "Introductory Meeting Graphic"
  },
];


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
        {viewMode === "list" ? (events.map((event) => (
          <EventCard
            date={event.date}
            time={event.time}
            name={event.name}
            description={event.description}
            image={event.image}
            alt={event.alt}
          />
        )))
           : <div></div>}
      </div>
        <Footer />
    </>
  );
};

export default Events;
