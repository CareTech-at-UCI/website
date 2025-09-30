import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
// import { Event as CalendarEvent } from "../components/EventCard";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import yaml from "js-yaml";
import "react-big-calendar/lib/css/react-big-calendar.css";

type Event = {
  date: string;
  time: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  start: Date;
  end: Date;
};

const localizer = momentLocalizer(moment);

const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [events, setEvents] = useState<Event[]>([]);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return { month: today.getMonth(), year: today.getFullYear() };
  });
  useEffect(() => {
    // get events from yaml file in public
    fetch("/events.yaml")
      .then((response) => response.text())
      .then((text) => {
        const data = yaml.load(text) as any[];
        
        const parsedEvents = data.map((event) => {
          const timeParts = event.time.replace(/([APM]+)$/, " $1").split("-"); // add space before AM/PM
          const startMoment = moment(`${event.date} ${timeParts[0]}`, "MMMM D, YYYY h:mm A");
  
          const endMoment = timeParts.length > 1
            ? moment(`${event.date} ${timeParts[1]}`, "MMMM D, YYYY h:mm A") // if end time exists, parse it
            : startMoment.clone().add(1, "hour"); // if only start time, clone and add an hour
  
          return {
            name: event.name || "Untitled Event",
            description: event.description || "",
            date: event.date,
            time: event.time,
            start: startMoment.isValid() ? startMoment.toDate() : new Date(), 
            end: endMoment.isValid() ? endMoment.toDate() : new Date(),
            alt: event.alt || "",
            image: event.image || "",
          };
        });
        
        setEvents(parsedEvents);
      });
  }, []);
  
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
      <div className="min-h-screen w-full p-8 pt-12 mb-96">
        <h1 className="text-6xl sm:text-8xl mt-8 sm:pt-20 md:pt-14 text-center mb-4 sm:mb-8 font-jersey text-[#183054]">
          Events
        </h1>

        <p className="hidden md:block md:text-center text-xl sm:text-2xl font-montserrat text-primary sm:m-8">
          We host meetings in <strong>[Room TBA]</strong> on{" "}
          <strong>Wednesdays 4:00-5:00PM</strong>! Meeting and event updates will
          be posted on Discord and Instagram, so be sure to follow us!
        </p>

        <div className="flex justify-between text-sm md:text-2xl font-medium text-[#183054] md:mt-14 md:p-5">
          <div className="flex flex-grow items-center gap-2 md:gap-4 lg:ml-52 md:ml-20">
            <span>{`${monthNames[date.month]} ${date.year}`}</span>
            <button
              className={`border border-[#294B7B] text-[#294B7B] text-xs md:text-base p-2 md:px-3 py-1 rounded-full hover:bg-[#294B7B] hover:text-white
              ${
                viewMode === "list"
                  ? "bg-[#294B7B] text-white"
                  : "text-[#294B7B] hover:bg-[#294B7B] hover:text-white"
              }`}
              onClick={() => setViewMode("list")}
            >
              Featured
            </button>
            <button
              className={`border border-[#294B7B] text-[#294B7B] text-xs md:text-base p-2 md:px-3 py-1 rounded-full hover:bg-[#294B7B] hover:text-white
              ${
                viewMode === "calendar"
                  ? "bg-[#294B7B] text-white"
                  : "text-[#294B7B] hover:bg-[#294B7B] hover:text-white"
              }`}
              onClick={() => setViewMode("calendar")}
            >
              Calendar
            </button>
          </div>

          <div className="flex gap-2 md:gap-4 md:mr-52">
            <button
              className="text-xl md:text-2xl text-[#183054] hover:text-gray-500"
              onClick={handlePrevMonth}
            >
              {"<"}
            </button>
            <button
              className="text-xl md:text-2xl text-[#183054] hover:text-gray-500"
              onClick={handleNextMonth}
            >
              {">"}
            </button>
          </div>
        </div>

        <hr className="w-full md:w-3/4 mt-2 md:mt-0 border border-black mx-auto" />

        {viewMode === "list" ? (
          events
            .filter((event) => event.date.includes(monthNames[date.month]) && event.date.includes(date.year.toString()))
            .map((event) => <EventCard key={event.name} event={event} />)
          ) : (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            titleAccessor={(event: Event) => `${event.time} ${event.name}`}
            views={["month"]}
            style={{ height: 800 }}
            className="mt-8 mb-16 mx-auto w-full md:w-3/4"
            eventPropGetter={() => ({
              style: {
                backgroundColor: "transparent",
                border: "none",
                color: "#183054",
                whiteSpace: "pre-line",
              },
            })}
            formats={{
              eventTimeRangeFormat: () => "",
              eventTimeRangeEndFormat: () => "",
              timeGutterFormat: (date: Date) => moment(date).format("h:mm A"),
            }}
            components={{
              month: {
                header: ({ label }) => (
                  <div className="w-full bg-[#183054] text-white text-center py-2">
                    {label}
                  </div>
                ),
              },
              event: ({ event }) => (
                <div className="bg-transparent p-2 rounded-md whitespace-normal">
                  <p className="text-[#183054]">{event.time}</p>
                  <p className="text-[#183054] font-semibold break-words">
                    {event.name}
                  </p>
                </div>
              ),
            }}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
