'use client';
import Cal from './calendar/calendar';
import { PriceData, priceData } from './calendar/priceData';
import { useCheckoutState } from '@/state/checkout';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Booker() {
  const { range, setPrice, setRange } = useCheckoutState();
  const firstDate = range[0]?.toLocaleDateString();
  const secondDate = range[1]?.toLocaleDateString();
  const timeDiff = Math.round((range[1]?.getTime() - range[0]?.getTime()) / (1000 * 60 * 60 * 24))
  const isValid = useMemo(() => range[0] !== null && range[1] !== null && range[0]?.getTime() < range[1]?.getTime() && timeDiff > 1, [range]);
  const selectedDates = isValid? `${firstDate} - ${secondDate}`: 'No dates selected';


  const calculatePrice = (priceData: PriceData[], range: [Date, Date]): number => {
    const [selectedStartDate, selectedEndDate] = range;
    let totalPrice = 0;

    priceData.forEach(data => {
        const { start, end, price } = data;
        if (start <= selectedEndDate && end >= selectedStartDate) {
            const overlapStart = selectedStartDate > start ? selectedStartDate : start;
            const overlapEnd = selectedEndDate < end ? selectedEndDate : end;
            const overlapDays = Math.ceil((overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24));
            totalPrice += price * overlapDays;
        }
    });

    return totalPrice;
};

  const price = isValid? calculatePrice(priceData, range): 0;
  const clearDates = (setRange:(range:[Date, Date]) => void) => {
    setRange([new Date(), new Date()]);
  };

  return (
    <div className="booker-container bg-khaki px-4 py-10 md:px-16" id='booker'>
      <h1 className="mb-2 text-3xl font-bold text-black">Book your spot</h1>
      <p>Secure, simple and fast</p>
      <div className="container max-w-screen-lg">
        <div className="md:text-md mt-4 flex items-center justify-center gap-4 text-sm md:mt-0 md:justify-end ">
          <button className="rounded border border-my-white bg-my-brown px-5 py-2 text-my-white"
          onClick={()=> clearDates(setRange)}>
            Clear dates
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center px-4 bg-white">
          <div className="container w-full text-black">
            <Cal />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 py-2 md:grid-cols-6 md:px-5">
          <div className="col-span-2 md:col-span-2">
            <p className="text-xl font-semibold text-black">Selected dates:</p>
            <p className="font-semibold text-my-white ">{selectedDates}</p>
          </div>
          <div>
            <div>
              <p className="text-xl font-semibold text-black">Check-in:</p>
              <p className="font-semibold text-my-white">16:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-xl font-semibold text-black">Check-out:</p>
              <p className="font-semibold text-my-white">10:00</p>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-semibold text-black">Price:</p>
            <p className="font-semibold text-my-white">{price} €</p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
            onClick={() => setPrice(price)}
              href="/checkout"
              aria-disabled={!isValid}
              className="w-full max-w-[170px] text-white rounded-br-lg rounded-tr-lg border-2 border-my-white bg-black px-3 py-2 text-lg font-bold transition-all aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 md:px-6 md:py-3 md:text-xl text-center"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
