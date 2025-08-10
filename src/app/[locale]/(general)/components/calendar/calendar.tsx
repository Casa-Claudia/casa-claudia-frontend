'use client';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';
import { PriceData, priceData } from './priceData';
import { ApiResponseDates, FormatedDates } from '@/api/clients/clients';
import { useTranslation } from 'react-i18next';

export default function Cal() {
  const { range, setRange } = useCheckoutState();
  const [changedMonth, setChangedMonth] = useState(false);

  const [fullDates, setFullDates] = useState([] as FormatedDates[]);
  const highSeasonStart = new Date(2024, 5, 1);
  const highSeasonEnd = new Date(2024, 8, 30);
  const MINIMUM_DAYS = 4;

  const { t } = useTranslation('calendar');

  const loadDates = async () => {
    try {
      const response = await fetch(`${process.env.API_PATH}/client`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data: ApiResponseDates = await response.json();
      console.log('data:');
      console.log(data);

      if (data.success) {
        const formattedDates = data.data.map(({ arrival_date, departure_date }) => {
          console.log('start', arrival_date);
          console.log('end', departure_date);
          let d1 = new Date(arrival_date);
          let yearArr = d1.getUTCFullYear();
          let monthArr = d1.getUTCMonth();
          let dayArr = d1.getUTCDate();

          let d2 = new Date(departure_date);
          let yearDep = d2.getUTCFullYear();
          let monthDep = d2.getUTCMonth();
          let dayDep = d2.getUTCDate();

          const formattedArrivalDate = new Date(yearArr, monthArr, dayArr);
          const formattedDepartureDate = new Date(yearDep, monthDep, dayDep);

          return {
            arrival_date: formattedArrivalDate,
            departure_date: formattedDepartureDate,
          };
        });

        console.log('formattedDates', formattedDates);
        setFullDates(formattedDates);
      } else {
        window.alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    loadDates();
  }, []);

  const disableDates = (date: Date, fullDates: FormatedDates[]) => {
    return fullDates.some(
      ({ arrival_date, departure_date }) =>
        date.getTime() > arrival_date?.getTime() && date.getTime() < departure_date?.getTime(),
    );
  };

  const priceOfDay = (date: Date, priceData: PriceData[]): number => {
    const price = priceData.find(({ start, end }) => {
      return date.getTime() >= start?.getTime() && date.getTime() <= end?.getTime();
    });
    return price ? price.price : 0;
  };

  const displayPrices = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const price = priceOfDay(date, priceData);
      return (
        <p
          id="buttonText"
          className="text-center text-[10px] font-light text-my-light-grey md:text-[14px]"
        >
          {price} €
        </p>
      );
    }
  };

  const checkIfValidRange = (
    range: [Date, Date],
    _fullDates: FormatedDates[],
    setRange: (range: [Date, Date]) => void,
  ) => {
    const [start, end] = range;
    const isInSeason =
      start.getTime() >= highSeasonStart.getTime() && end.getTime() <= highSeasonEnd.getTime();
    const isInStartSeason =
      start.getTime() < highSeasonStart.getTime() && end.getTime() <= highSeasonEnd.getTime();
    const isInEndSeason =
      start.getTime() >= highSeasonStart.getTime() && end.getTime() > highSeasonEnd.getTime();
    const isFromSaturdayToSaturday = start.getDay() === 6 && end.getDay() === 6;
    const dayDifference = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (!start || !end) {
      setRange([start, start]);
      return;
    } else if (isInSeason && !isFromSaturdayToSaturday) {
      window.alert('You can only book from Saturday to Saturday during high season');
      setRange([start, start]);
      return;
    } else if (isInStartSeason && end.getDay() !== 6) {
      window.alert('You must book untill Saturday during high season');
      setRange([start, start]);
      return;
    } else if (isInEndSeason && start.getDay() !== 6) {
      window.alert('You must book from Saturday during high season');
      setRange([start, start]);
      return;
    } else if (!isInSeason && dayDifference < MINIMUM_DAYS) {
      window.alert(`You can only book for a minimum of ${MINIMUM_DAYS} days`);
      setRange([start, start]);
      return;
    }

    const isInvalidRange = fullDates.some(
      ({ arrival_date: s, departure_date: e }) =>
        start.getTime() <= s?.getTime() &&
        end.getTime() > s?.getTime() &&
        start.getTime() < e?.getTime() &&
        end.getTime() >= e?.getTime(),
    );

    if (isInvalidRange) {
      console.log('not valid range');
      setRange([end, end]);
    } else {
      setRange(range);
    }
    return;
  };

  useEffect(() => {
    const tiles = document.querySelectorAll(
      '.react-calendar__tile',
    ) as NodeListOf<HTMLButtonElement>;
    tiles.forEach((tile) => {
      const abbrElement = tile.querySelector('abbr');
      if (abbrElement) {
        const date = abbrElement.getAttribute('aria-label');

        if (date) {
          const isStart = fullDates.some(({ arrival_date, departure_date }) => {
            return new Date(date).getTime() === arrival_date?.getTime();
          });
          const isEnd = fullDates.some(({ arrival_date, departure_date }) => {
            return new Date(date).getTime() === departure_date?.getTime();
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
  }, [changedMonth, fullDates, range]);

  return (
    <div className="flex w-full items-center justify-center">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => checkIfValidRange(e, fullDates, setRange)}
        selectRange={true}
        maxDate={new Date(2027, 0, 3)}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        tileDisabled={({ activeStartDate, date, view }) => disableDates(date, fullDates)}
        allowPartialRange={true}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
          if (view === 'month') setChangedMonth(!changedMonth);
        }}
        tileContent={displayPrices}
        minDetail="month"
      />
    </div>
  );
}
