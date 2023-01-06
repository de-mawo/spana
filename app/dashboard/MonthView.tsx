"use client";

import { useState } from "react";

type MonthViewProps = {
  events: {
    name: string;
    date: string;
  }[];
};

const MonthView = ({ events }: MonthViewProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
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
    <table className="w-full text-sm text-left flex-shrink text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Sun</th>
          <th scope="col" className="px-6 py-3">Mon</th>
          <th scope="col" className="px-6 py-3">Tue</th>
          <th scope="col" className="px-6 py-3">Wed</th>
          <th scope="col" className="px-6 py-3">Thu</th>
          <th scope="col" className="px-6 py-3">Fri</th>
          <th scope="col" className="px-6 py-3">Sat</th>
        </tr>
      </thead>
      <tbody>
        {monthGrid.map((week, weekIndex) => (
          <tr key={weekIndex} className="bg-white border-b text-center  dark:bg-gray-800 dark:border-gray-700">
            {week.map((day, dayIndex) => (
              <td key={dayIndex} className='px-6 py-3'>
                {day && (
                  <>
                    <div className="day-number">{day.day}</div>
                    {day.events.map((event, eventIndex) => (
                      <div className="event" key={eventIndex}>
                        {event.name}
                      </div>
                    ))}
                  </>
                )}
                {events
                  .filter(event => {
                    const eventDate = new Date(event.date);
                    return (
                      eventDate.getDate() === day.day &&
                      eventDate.getMonth() === currentMonth &&
                      eventDate.getFullYear() === currentYear
                    );
                  })
                  .map(event => (
                    <div key={event.name}>{event.name}</div>
                  ))}
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
