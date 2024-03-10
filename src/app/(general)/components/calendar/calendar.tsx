'use client';

import React, { useState, useEffect, useRef, useLayoutEffect, use } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';
import { PriceData, priceData } from './priceData';
import { FullDates, ApiResponseDates } from '@/api/clients/clients';

export default function Cal() {
  const { range, setRange } = useCheckoutState();
  const [changedMonth, setChangedMonth]= useState(false);

  const [fullDates, setFullDates] = useState([] as FullDates[]);

  useEffect(() => {
    console.log('useEffect', fullDates);
    const loadDates = async () => {
      try {
        const response = await fetch("http://localhost:4444/api/v1/client", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data: ApiResponseDates = await response.json()
        console.log(data);
      
        if (data.success) {
          const formattedDates = data.data.map(({ start, end }) => ({
            start: new Date(start),
            end: new Date(end)
          }));
          setFullDates(formattedDates);
        } else {
          window.alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadDates();
  }, []);
  
  const disableDates = (date:Date, fullDates: FullDates[]) => {
    if (date.getDay() != 6) return true;
    return fullDates.some(({ start, end }) => 
      date.getTime() > start?.getTime() && date.getTime() < end?.getTime()
    );
  };

  const priceOfDay = (date: Date, priceData: PriceData[]): number => {
    const price = priceData.find(({ start, end }) => {
      return date.getTime() >= start?.getTime() && date.getTime() <= end?.getTime();
    });
    return price ? price.price : 0;
  }

  const displayPrices = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const price = priceOfDay(date, priceData);
      return <p id="buttonText" className='text-[10px] md:text-[14px] font-light text-my-light-grey text-center'>{price} €</p>;
    }
  }

  const checkIfValidRange = (range:[Date, Date], fullDates: FullDates[], setRange: (range: [Date, Date]) => void) => {
    const [start, end] = range;
    console.log(start, end);
    if (!start || !end) {
      setRange([start,start]);
      return;
    }
    
    const isInvalidRange = fullDates.some(({ start:s, end: e }) => 
    start.getTime()<=s?.getTime() && end.getTime()>s?.getTime() 
    && start.getTime()<e?.getTime() && end.getTime()>=e?.getTime()
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
          const isStart = fullDates.some(({ start, end }) => {
            return new Date(date).getTime() === start?.getTime();
          });
          const isEnd = fullDates.some(({ start, end }) => {
            return new Date(date).getTime() === end?.getTime();
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
  }, [changedMonth, range, fullDates]); // Dependency array contains changedMonth and range
  
  return (
    <div className="flex items-center justify-center w-full">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => checkIfValidRange(e, fullDates, setRange)}
        selectRange={true}
        maxDate={new Date(2025, 0, 5)}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        tileDisabled={	({ activeStartDate, date, view }) => disableDates(date, fullDates)}
        allowPartialRange={true}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) =>{if (view==='month') setChangedMonth(!changedMonth)}}
        tileContent={displayPrices}
      />
    </div>
  );
}
