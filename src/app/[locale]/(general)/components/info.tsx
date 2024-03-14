import React from 'react';
interface Props {
  t: any;
}
export default function Info({t}: Props) {
  return (
    <div className="bg-my-white md:px-16 px-4 py-16 text-my-black">
      <div className=" grid grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto md:mt-10">
        <div className="circle flex flex-col items-center mb-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/guest-logo.svg" alt="guest-logo" />
          </div>
          <div className="mt-2 text-center">{t("info-guests")}</div>
        </div>
        <div className="circle flex flex-col items-center mb-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/car-logo.svg" alt="car-logo" />
          </div>
          <div className="mt-2 text-center">{t("info-parking")}</div>
        </div>
        <div className="circle flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/swimming-pool.svg" alt="swimming pool" />
          </div>
          <div className="mt-2 text-center">{t("info-pool")}</div>
        </div>
        <div className="circle flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/grill.svg" alt="grill" />
          </div>
          <div className="mt-2 text-center">{t("info-outdoor-grill")}</div>
        </div>
      </div>
      <div className="info-text items-center py-5 text-left max-w-screen-xl mx-auto">
        <p>
          {t("info-text-1")}
          <br />
          <br />
          {t("info-text-2")}
          <br />
          <br />
          {t("info-text-3")}
        </p>
      </div>
      <div className="md:mt-10 mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 xl:px-16 gap-2 max-w-screen-2xl mx-auto">
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] rounded-md border border-black px-5 py-2 mb-6">
            <div className="flex items-center">
              <img className="mr-2" src="/bedroom.svg" alt="bedroom" />
              <span className="Bedroom text-base font-bold">{t("info-bedroom")}</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>{t("info-king-size")}</li>
                <li>{t("info-in-suite-bath")}</li>
                <li>TV</li>
                <li>{t("info-terrace")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] items-center rounded-md border border-black px-5 py-2 mb-6 ">
            <div className="flex items-center">
              <img className="mr-2" src="/livingroom.svg" alt="living room" />
              <span className="Bedroom text-base font-bold">{t("info-living-room")}</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>{t("info-king-size")}</li>
                <li>HI-FI system</li>
                <li>TV</li>
                <li>Fireplace</li>
                <li>Bathroom</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] items-center rounded-md border border-black px-5 py-2 mb-6">
            <div className="flex items-center">
              <img className="mr-2" src="/kitchen.svg" alt="kitchen" />
              <span className="Bedroom text-base font-bold">{t("info-kitchen")}</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>{t("info-fully")}</li>
                <li>{t("info-dining-area")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] items-center rounded-md border border-black px-5 py-2 mb-6">
            <div className="flex items-center">
              <img className="mr-2" src="/sun.svg" alt="sun picture" />
              <span className="Bedroom text-base font-bold">{t("info-outdoors")}</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>{t("info-dining-table")}</li>
                <li>{t("info-sun-lounges")}</li>
                <li>{t("info-sun-shades")}</li>
                <li>{t("info-grill")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
