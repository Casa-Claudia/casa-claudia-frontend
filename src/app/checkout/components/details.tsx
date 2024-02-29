import { CalendarDays, FlameKindling, LocateIcon, UserRound, Wallet, Waves } from 'lucide-react';
import Link from 'next/link';

export default function Details() {
  return (
    <div className="details md:max-h-[460px] bg-light-brown">
      <h1 className="md:px-16 px-4 md:text-4xl text-3xl font-bold text-my-black">Complete your booking</h1>
      <p className="md:px-16 px-4 md:text-xl text-md font-medium text-my-light-grey ">
        Secure your spot in Casa Claudia today.
      </p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="img-container container md:pr-5 md:pb-5 pr-4 pl-4 md:pl-0">
          <img src="/booking_image.png" alt="" className="h-full max-h-[513px] object-cover w-full" />
        </div>
        <div className="details-container md:px-10 px-4 py-5">
          <h2 className="text-2xl font-semibold text-my-black">Details</h2>
          <div className="flex flex-wrap text-my-black">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              <div className="md:p-4 p-2">
                <div className="flex">
                  <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <LocateIcon/>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">Location</h3>
                    <p className=" ml-1 text-sm">Novigrad, Croatia</p>
                  </div>
                </div>
              </div>
              
              <div className=" md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <Wallet/>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">Price</h3>
                    <p className=" ml-1 text-sm">750€</p>
                  </div>
                </div>
              </div>
              <div className=" md:p-4 p-2">
                <div className="flex">
                  <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <CalendarDays/>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">Travel period</h3>
                    <p className="ml-1 text-xs">
                      1.11.2023 - 23.11.2023
                    </p>
                  </div>
                </div>
              </div>
              <div className=" md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <UserRound/>
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="md:text-md text-sm font-semibold md:font-normal">4 guests</h3>
                  </div>
                </div>
              </div>
              <div className=" md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <FlameKindling/>
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="md:text-md text-sm font-semibold md:font-normal">outdoor grill</h3>
                  </div>
                </div>
              </div>
              <div className="md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <Waves/>
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="md:text-md text-sm font-semibold md:font-normal ">heated pool</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center md:text-md text-sm">
            <p className="text-my-black text-center">
              Not happy with the details? Change your booking{' '}
              <Link href="/" className="hover:underline">
                {' '}
                here.
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
