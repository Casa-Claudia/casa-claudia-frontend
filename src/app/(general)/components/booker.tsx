'use client';

import Cal from './calendar/calendar';
import { useCheckoutState } from '@/state/checkout';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Booker() {
  const { range } = useCheckoutState();

  const isValid = useMemo(() => range[0]?.getTime() < range[1]?.getTime(), [range]);

  return (
    <div className="booker-container bg-khaki px-4 py-10 md:px-16">
      <h1 className="mb-2 text-3xl font-bold text-black">Book your spot</h1>
      <p>Secure, simple and fast</p>
      <div className="container max-w-screen-lg">
        <div className="md:text-md mt-4 flex items-center justify-center gap-4 text-sm md:mt-0 md:justify-end md:pr-10">
          <button className="rounded border border-my-white bg-my-brown px-5 py-2 text-my-white">
            Clear dates
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <div className="container w-full text-black">
            <Cal />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 py-2 md:grid-cols-5 md:px-5 md:pr-10">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-semibold text-black">Selected dates:</p>
            <p className="font-semibold text-my-white">1.11.2023 - 23.11.2023</p>
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
            <p className="font-semibold text-my-white">700€</p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              href="/checkout"
              aria-disabled={!isValid}
              className="w-full max-w-[170px] rounded-br-lg rounded-tr-lg border-2 border-my-white bg-black px-3 py-2 text-lg font-bold transition-all aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 md:px-6 md:py-3 md:text-xl text-center"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
