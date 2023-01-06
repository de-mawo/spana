'use client'
import React, { useState } from 'react';

const WeekView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Get the day of the week for the last day of the month (0 = Sunday, 1 = Monday, etc.)
  const lastDayOfWeek = lastDayOfMonth.getDay();
  const numDaysInMonth = lastDayOfMonth.getDate();

  // Initialize an array to store the calendar rows
  const calendarRows: string[][] = [];

  // Initialize a current day counter
  let currentDay = 1;

  // Create the first row of the calendar
  let week: string[] = [];
  for (let i = 0; i < 7; i++) {
    if (i < firstDayOfWeek) {
      week.push('');
    } else {
      week.push(`${daysOfWeek[i]} ${currentDay}`);
      currentDay++;
    }
  }
  calendarRows.push(week);

  // Create the remaining rows of the calendar
  while (currentDay <= numDaysInMonth) {
    week = [];
    for (let i = 0; i < 7; i++) {
      if (currentDay <= numDaysInMonth) {
        week.push(`${daysOfWeek[i]} ${currentDay}`);
      } else {
        week.push('');
      }
      currentDay++;
    }
    calendarRows.push(week);
  }
  return (
    <>
      {calendarRows.map((week: string[], index: number) => {
        return (
          <div className="week" key={index}>
            {week.map((day: string, index: number) => {
              return <div className="day" key={index}>{day}</div>;
            })}
          </div>
        );
      })}
    </>
  );
};

export default WeekView;
