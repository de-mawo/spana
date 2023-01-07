'use client'

import React, { useState } from 'react';
import { Events } from '../../data/Events';
import MonthView from './MonthView';
import WeekView from './WeekView';

type View = 'month' | 'week';

function Calendar() {
  const [view, setView] = useState<View>('month');
  const events = Events;

  return (
    <div className="relative overflow-x-auto my-5">
     
      <div>
      <h1 className='my-2'>Calendar</h1>
      <MonthView events={events} /> 
        {/* {view === 'month' ? <MonthView events={events} /> : <WeekView />} */}
      </div>
      {/* <button type="button" onClick={() => setView('month')}>Month View</button>
      <button type="button" onClick={() => setView('week')}>Week View</button> */}
    </div>
  );
}

export default Calendar;

