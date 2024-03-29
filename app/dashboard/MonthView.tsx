"use client";

import { useState } from "react";
import { Events } from "../../types";

type MonthViewProps = {
  events: Events[];
};

const MonthView = ({ events }: MonthViewProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // initial state is todays date with now time

  const currentMonth = selectedDate.getMonth(); // gets Today's month
  const currentYear = selectedDate.getFullYear(); // gets Todays Year
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1); //
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0); // the 0 parameter in this code represents the last day of the previous month.

  const daysInMonth = lastDayOfMonth.getDate();

  const monthEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === currentMonth &&
      eventDate.getFullYear() === currentYear
    );
  });

  const monthGrid = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth.getDay()) {
        week.push("");
      } else if (day > daysInMonth) {
        week.push("");
      } else {
        const eventsForDay = monthEvents.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.getDate() === day;
        });
        week.push({ day, events: eventsForDay });
        day++;
      }
    }
    monthGrid.push(week);
  }

  return (
    <div className="month">
      <table className="w-full border border-deep-sapphire-600  text-left flex-shrink text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sun
            </th>
            <th scope="col" className="px-6 py-3">
              Mon
            </th>
            <th scope="col" className="px-6 py-3">
              Tue
            </th>
            <th scope="col" className="px-6 py-3">
              Wed
            </th>
            <th scope="col" className="px-6 py-3">
              Thu
            </th>
            <th scope="col" className="px-6 py-3">
              Fri
            </th>
            <th scope="col" className="px-6 py-3">
              Sat
            </th>
          </tr>
        </thead>
        <tbody>
          {monthGrid.map((week, weekIndex) => (
            <tr
              key={weekIndex}
              className="bg-white border-b   text-center  dark:bg-gray-800 dark:border-gray-700"
            >
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className="px-6 py-3">
                  {day && (
                    <>
                      {typeof day === "object" ? (
                        <div className="day-number">{day.day}</div>
                      ) : null}
                      {typeof day === "object" &&
                        day.events.map((event, eventIndex) => (
                          <div className="event flex flex-col" key={eventIndex}>
                            <span className="bg-deep-sapphire-600 text-white ">
                              {event.employee}
                            </span>
                            <span className="bg-deep-sapphire-600 text-white ">
                              {" "}
                              {event.name}
                            </span>
                          </div>
                        ))}
                    </>
                  )}
                  {/* {events
                    .filter((event) => {
                      const eventDate = new Date(event.date);
                      return (
                        eventDate.getDate() ===
                          (typeof day === "object" ? day.day : 0) &&
                        eventDate.getMonth() === currentMonth &&
                        eventDate.getFullYear() === currentYear
                      );
                    })
                    .map((event) => (
                      <div key={event.name}>{event.name}</div>
                    ))} */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthView;
