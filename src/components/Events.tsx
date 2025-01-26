import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import yaml from "js-yaml";
import "react-big-calendar/lib/css/react-big-calendar.css";

// for handling weird times in yaml file
const localizer = momentLocalizer(moment);

// yaml file looks like this
interface CalendarEvent {
  title: string;
  start: Date;
  end?: Date;
  description: string;
}

const Event: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );

  useEffect(() => {
    // get events from yaml file in public
    fetch("/events.yaml")
      .then((response) => response.text())
      .then((text) => {
        const data = yaml.load(text);
        const parsedEvents = (data as any[]).map((event: any) => ({
          ...event,
          start: moment(event.start).toDate(),
          end: event.end
            ? moment(event.end).toDate()
            : moment(event.start).add(2, "hours").toDate(),
        }));
        setEvents(parsedEvents);
      });
  }, []);
  // Each event component looks like this in the calendar (the thing in the blue boc)
  const EventComponent = ({ event }: { event: CalendarEvent }) => (
    <div className="p-1 sm:p-2 md:p-3">
      <div className="font-semibold text-[10px] sm:text-sm md:text-base truncate">
        {event.title}
      </div>
      <div className="text-[8px] sm:text-xs md:text-sm truncate">
        {moment(event.start).format("h:mm A")}
        {event.end && ` - ${moment(event.end).format("h:mm A")}`}
      </div>
    </div>
  );

  return (
    // actual events sections
    <section className="min-h-screen bg-white font-jersey px-4 py-8 md:px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center font-bold">
          Events
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#294B7B] mb-6 text-center max-w-3xl mx-auto">
          We host events in [Location] at [time and day]!
        </p>

        <div className="flex justify-center mb-8">
          <Link
            to="/Events"
            className="inline-flex items-center text-base sm:text-lg text-[#0097FC] hover:text-[#0078c9] transition-colors"
          >
            View All Events
            <img
              className="w-4 h-4 sm:w-6 sm:h-6 ml-2"
              src="/icons/blue_arrow.svg"
              alt="View more"
            />
          </Link>
        </div>
    {/* Till up was there brfore */}

    {/* Big Calendar component taking 75 % of screen height */}
        <div className=" h-[75vh] bg-white rounded-lg shadow-lg p-2 sm:p-4">
          {/* react calendar needs localizer from moment */}
          <Calendar
            localizer={localizer}
            // events (events from yaml file grabbed by useEffect)
            events={events}
            // the key for each event which indicates the start and end
            startAccessor="start"
            endAccessor="end"
            // click on event to show modal of the event you want to show (this broke my brain)
            onSelectEvent={setSelectedEvent}
            // custom event component (what it looks like on the calendar the blue blox)
            components={{
              event: EventComponent,
            }}
            className="rounded-lg text-sm sm:text-xs"
            // formats for time gutter and event time range

            // uses moment to format the time gutter and event time range
            formats={{
              timeGutterFormat: (date: Date) => moment(date).format("h A"),
              eventTimeRangeFormat: ({
                start,
                end,
              }: {
                start: Date;
                end: Date;
              }) => {
                return `${moment(start).format("h:mm A")} - ${moment(
                  end
                ).format("h:mm A")}`;
              },
            }}
          />
        </div>
      </div>
      {/* Modal for event details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 mx-4">
            <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
            <div className="text-gray-600 mb-4">
              {moment(selectedEvent.start).format("MMMM D, YYYY h:mm A")}
              {selectedEvent.end &&
                ` - ${moment(selectedEvent.end).format("h:mm A")}`}
            </div>
            <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full bg-[#0097FC] hover:bg-[#0078c9] text-white py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Event;
