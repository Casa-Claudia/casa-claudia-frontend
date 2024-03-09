'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';
import { PriceData, priceData } from './priceData';

import { ReservedDates } from './data';
import { DateRange } from './data';

export default function Cal() {
  const { range, setRange } = useCheckoutState();
  const [changedMonth, setChangedMonth]= useState(false);
  const rangeRef = useRef(range);
  const counterRef = useRef(0);
  
  const disableDates= (date:Date, ReservedDates: DateRange[]) => {
    if (date.getDay() != 6) return true;
    // disale the days between the ranges
    return ReservedDates.some(({ start, end }) => 
      date.getTime() > start.getTime() && date.getTime() < end.getTime()
    );
  };

  const priceOfDay = (date: Date, priceData: PriceData[]): number => {
    const price = priceData.find(({ start, end }) => {
      return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
    });
    return price ? price.price : 0;
  }

  const displayPrices = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const price = priceOfDay(date, priceData);
      return <p id="buttonText" className='text-[10px] md:text-[14px] font-light text-my-light-grey text-center'>{price} €</p>;
    }
  }

  const checkIfValidRange = (range:[Date, Date], ReservedDates: DateRange[], setRange: (range: [Date, Date]) => void) => {
    const [start, end] = range;
    console.log(start, end);
    if (!start || !end) {
      setRange([start,start]);
      return;
    }
    
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

  useEffect(() => {
    // Logic for updating tiles based on changedMonth
    const tiles = document.querySelectorAll('.react-calendar__tile') as NodeListOf<HTMLButtonElement>;
    tiles.forEach((tile) => {
      const abbrElement = tile.querySelector('abbr');
      if (abbrElement) {
        const date = abbrElement.getAttribute('aria-label');
  
        if (date) {
          const isStart = ReservedDates.some(({ start, end }) => {
            return new Date(date).getTime() === start.getTime();
          });
          const isEnd = ReservedDates.some(({ start, end }) => {
            return new Date(date).getTime() === end.getTime();
          });
  
          if (isStart && isEnd) {
            tile.disabled = true;
          } else if (isStart) {
            tile.classList.add('start');
          } else if (isEnd) {
            tile.classList.add('end');
          }
        } else {
          console.log('aria-label attribute not found');
        }
      } else {
        console.log('abbr element not found in tile');
      }
    });
  }, [changedMonth, range]); // Dependency array contains changedMonth and range
  
  return (
    <div className="flex items-center justify-center w-full">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => checkIfValidRange(e, ReservedDates, setRange)}
        selectRange={true}
        maxDate={new Date(2025, 0, 5)}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        tileDisabled={	({ activeStartDate, date, view }) => disableDates(date, ReservedDates)}
        allowPartialRange={true}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) =>{if (view==='month') setChangedMonth(!changedMonth)}}
        tileContent={displayPrices}
      />
    </div>
  );
}
