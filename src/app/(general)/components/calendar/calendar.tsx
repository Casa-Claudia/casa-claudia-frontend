'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';

import { ReservedDates } from './data';
import { DateRange } from './data';

export default function Cal() {
  const { range, setRange } = useCheckoutState();
  
  const disableDates= (date:Date, ReservedDates: DateRange[]) => {
    if (date.getDay() != 6) return true;
    // disale the days between the ranges
    return ReservedDates.some(({ start, end }) => 
      date.getTime() > start.getTime() && date.getTime() < end.getTime()
    );

  };

  const checkIfValidRange = (range:[Date, Date], ReservedDates: DateRange[], setRange: (range: [Date, Date]) => void) => {
    const [start, end] = range;
    if (!start || !end) return;
  
    const isInvalidRange = ReservedDates.some(({ start:s, end: e }) => 
    start.getTime()<=s.getTime() && end.getTime()>s.getTime() 
    && start.getTime()<e.getTime() && end.getTime()>=e.getTime()
    );
  
    if (isInvalidRange) {
      console.log('not valid range');
      setRange([end, end]);
    } else {
      setRange(range);
    }
  };



  return (
    <div className="flex items-center justify-center w-full">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => checkIfValidRange(e, ReservedDates, setRange)}
        selectRange={true}
        maxDate={new Date(2024, 11, 31)}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        tileDisabled={	({ activeStartDate, date, view }) => disableDates(date, ReservedDates)}
        allowPartialRange={true}
      />
    </div>
  );
}
