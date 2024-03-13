import React from 'react';

export default function Info() {
  return (
    <div className="bg-my-white md:px-16 px-4 py-16 text-my-black">
      <div className=" grid grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto md:mt-10">
        <div className="circle flex flex-col items-center mb-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/guest-logo.svg" alt="guest-logo" />
          </div>
          <div className="mt-2 text-center">4 guests</div>
        </div>
        <div className="circle flex flex-col items-center mb-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/car-logo.svg" alt="car-logo" />
          </div>
          <div className="mt-2 text-center">2 parking spaces</div>
        </div>
        <div className="circle flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/swimming-pool.svg" alt="swimming pool" />
          </div>
          <div className="mt-2 text-center">swimming pool</div>
        </div>
        <div className="circle flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-my-brown">
            <img src="/grill.svg" alt="grill" />
          </div>
          <div className="mt-2 text-center">outdoor grill</div>
        </div>
      </div>
      <div className="info-text items-center py-5 text-left max-w-screen-xl mx-auto">
        <p>
          This is a perfect location to take a break from the hustle and bustle of everyday life. No
          matter if you travel to Istria to go sightseeing or just to unwind, Villa Casa Claudia can
          provide you with both, thanks to its location and amenities. It is situated 2 km from
          lovely Istrian town Novigrad, in the middle of olive groves, so you can fully experience
          the charms of relaxing the silence around the olive trees. In this comfortable Villa you
          will find everything you need for an unforgettable vacation: comfortable interior with
          quality furniture, carefully decorated with many heartwarming details that gives you a
          homely and loving feeling. Villa has: fully equipped kitchen, living room with fireplace,
          TV and sleeping area with king size bed, lovely bedroom with TV, small terrace and private
          bathroom . Rooms are bright, spacious and air cinditioned. Beautiful private outdoor pool
          and terrace with calming nature views and sounds invites you to refresh at any time. Sun
          loungers, parasols, an outdoor shower, dining table and a barbecue, complete the outdoor
          space and ensure much fun and pleasant shared hours.
          <br />
          <br />
          There are 2 parking spaces available.
          <br />
          <br />
          Youth groups are not allowed!
        </p>
      </div>
      <div className="md:mt-10 mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 xl:px-16 gap-2 max-w-screen-2xl mx-auto">
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] rounded-md border border-black px-5 py-2 mb-6">
            <div className="flex items-center">
              <img className="mr-2" src="/bedroom.svg" alt="bedroom" />
              <span className="Bedroom text-base font-bold">Bedroom</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>King size bed 160x200</li>
                <li>In-suite bathroom</li>
                <li>TV</li>
                <li>Small terrace</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] items-center rounded-md border border-black px-5 py-2 mb-6 ">
            <div className="flex items-center">
              <img className="mr-2" src="/livingroom.svg" alt="living room" />
              <span className="Bedroom text-base font-bold">Living room</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>King size bed 160x200</li>
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
              <span className="Bedroom text-base font-bold">Kitchen</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>Fully equpped</li>
                <li>Dining area</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="my-container h-[156px] w-[260px] items-center rounded-md border border-black px-5 py-2 mb-6">
            <div className="flex items-center">
              <img className="mr-2" src="/sun.svg" alt="sun picture" />
              <span className="Bedroom text-base font-bold">Outdoors</span>
            </div>
            <div className=" ml-6 py-2 text-sm text-my-light-grey ">
              <ul className="list-disc">
                <li>Dining table</li>
                <li>Sun lounges</li>
                <li>Sun shades</li>
                <li>Grill</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
