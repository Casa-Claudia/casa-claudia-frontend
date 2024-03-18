"use client";
import { CalendarDays, FlameKindling, LocateIcon, UserRound, Wallet, Waves } from 'lucide-react';
import Link from 'next/link';
import { useCheckoutState } from '@/state/checkout';
import { useTranslation } from 'react-i18next';

export default function Details() {
  const {range, price} = useCheckoutState();
  const { t } = useTranslation('checkout');

  const isValid = range[0] !== null && range[1] !== null && range[0]?.getTime() < range[1]?.getTime();

  const selectedDates = isValid ? ` ${range[0]?.toLocaleDateString("de-DE")} - ${range[1]?.toLocaleDateString("de-DE")}`: t("booker:no-dates");

  return (
    <div className="details md:max-h-[460px] bg-light-brown">
      <h1 className="md:px-16 px-4 md:text-4xl text-3xl font-bold text-my-black">{t("title")}</h1>
      <p className="md:px-16 px-4 md:text-xl text-md font-medium text-my-light-grey ">
      {t("sub")}
      </p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="img-container container md:pr-5 md:pb-5 pr-4 pl-4 md:pl-0">
          <img src="/booking_image.png" alt="" className="h-full max-h-[513px] object-cover w-full" />
        </div>
        <div className="details-container md:px-10 px-4 py-5">
          <h2 className="text-2xl font-semibold text-my-black">{t("details")}</h2>
          <div className="flex flex-wrap text-my-black">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              <div className="md:p-4 p-2">
                <div className="flex">
                  <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <LocateIcon/>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{t("loc")}</h3>
                    <p className=" ml-1 text-sm">{t("novigrad")}</p>
                  </div>
                </div>
              </div>
              
              <div className=" md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <Wallet/>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{t("price")}</h3>
                    <p className=" ml-1 text-sm">{price} €</p>
                  </div>
                </div>
              </div>
              <div className=" md:p-4 p-2">
                <div className="flex">
                  <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <CalendarDays/>
                  </div>
                  <div className="ml-4">
                    <h3 className="md:text-md text-sm font-semibold">{t("period")}</h3>
                    <p className="ml-1 text-xs">
                      {selectedDates}
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
                    <h3 className="md:text-md text-sm font-semibold md:font-normal">{t("guests")}</h3>
                  </div>
                </div>
              </div>
              <div className=" md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <FlameKindling/>
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="md:text-md text-sm font-semibold md:font-normal">{t("grill")}</h3>
                  </div>
                </div>
              </div>
              <div className="md:p-4 p-2">
                <div className="flex">
                <div className="flex items-center aspect-square h-full max-h-[55px] max-w-[55px] md:p-4 p-2 rounded-full border border-khaki">
                    <Waves/>
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="md:text-md text-sm font-semibold md:font-normal ">{t("pool")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-16 2xl:mt-20 mt-10 justify-center md:text-md text-sm">
            <p className="text-my-black text-center">
              {t("not-happy")}{' '}
              <Link href="/#booker" className="hover:underline">
                {' '}
                {t("here")}
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
