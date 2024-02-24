import React from 'react';

export default function Info() {
  return (
    <div className="bg-my-white text-my-black px-16 py-16">
      <div className="flex justify-between items-center mx-60 py-5">
        <div className="circle flex flex-col items-center">
          <div className="w-24 h-24 border border-my-brown rounded-full flex justify-center items-center">
            <img src="/guest-logo.svg" alt="guest-logo" />
          </div>
          <div className="text-center mt-2">4 guests</div>
        </div>

        <div className="circle flex flex-col items-center">
          <div className="w-24 h-24 border border-my-brown rounded-full flex justify-center items-center">
            <img src="/car-logo.svg" alt="car-logo" />
          </div>
          <div className="text-center mt-2">2 parking spaces</div>
        </div>

        <div className="circle flex flex-col items-center">
          <div className="w-24 h-24 border border-my-brown rounded-full flex justify-center items-center">
            <img src="/swimming-pool.svg" alt="swimming pool" />
          </div>
          <div className="text-center mt-2">swimming pool</div>
        </div>

        <div className="circle flex flex-col items-center">
          <div className="w-24 h-24 border border-my-brown rounded-full flex justify-center items-center">
            <img src="/grill.svg" alt="grill" />
          </div>
          <div className="text-center mt-2">outdoor grill</div>
        </div>
      </div>

      <div className= "info-text px-20 py-5 text-left items-center">
        <p>This is a perfect location to take a break from the hustle and bustle of everyday life.
            No matter if you travel to Istria to go sightseeing or just to unwind, Villa Casa Claudia
            can provide you with both, thanks to its location and amenities. It is situated 2 km
            from lovely Istrian town Novigrad, in the middle of olive groves, so you can fully
            experience the charms of relaxing the silence around the olive trees.
            In this comfortable Villa you will find everything you need for an unforgettable
            vacation: comfortable interior with quality furniture, carefully decorated with many
            heartwarming details that gives you a homely and loving feeling. Villa has: fully
            equipped kitchen, living room with fireplace, TV and sleeping area with king size
            bed, lovely bedroom with TV, small terrace and private bathroom . Rooms are
            bright, spacious and air cinditioned.
            Beautiful private outdoor pool and terrace with calming nature views and sounds
            invites you to refresh at any time. Sun loungers, parasols, an outdoor shower, dining
            table and a barbecue, complete the outdoor space and ensure much fun and
            pleasant shared hours.
            <br/>
            <br/>

            There are 2 parking spaces available.
            <br/>
            <br/>
            Youth groups are not allowed!
        </p>
      </div>
      <div className='flex justify-between items-center px-10 mt-10'>
        <div className="my-container h-[156px] w-[260px] border border-black items-center px-5 py-2 rounded-md">
            <div className='flex items-center'>
                <img className= "mr-2" src="/bedroom.svg" alt="bedroom" />
                <span className="font-bold text-base Bedroom">Bedroom</span>
            </div>
            <div className=' text-sm ml-6 py-2 text-my-light-grey '>
                <ul className='list-disc'>
                    <li>King size bed 160x200</li>
                    <li>In-suite bathroom</li>
                    <li>TV</li>
                    <li>Small terrace</li>
                </ul>
            </div>
        </div>
        <div className="my-container h-[156px] w-[260px] border border-black items-center px-5 py-2 rounded-md">
            <div className='flex items-center'>
                <img className= "mr-2" src="/livingroom.svg" alt="living room" />
                <span className="font-bold text-base Bedroom">Living room</span>
            </div>
            <div className=' text-sm ml-6 py-2 text-my-light-grey '>
                <ul className='list-disc'>
                    <li>king size bed 160x200</li>
                    <li>HI-FI system</li>
                    <li>TV</li>
                    <li>fireplace</li>
                    <li>bathroom</li>
                </ul>
            </div>
        </div>
        <div className="my-container h-[156px] w-[260px] border border-black items-center px-5 py-2 rounded-md">
            <div className='flex items-center'>
                <img className= "mr-2" src="/kitchen.svg" alt="kitchen" />
                <span className="font-bold text-base Bedroom">Kitchen</span>
            </div>
            <div className=' text-sm ml-6 py-2 text-my-light-grey '>
                <ul className='list-disc'>
                    <li>Fully equpped</li>
                    <li>dining area</li>
                </ul>
            </div>
        </div>
        <div className="my-container h-[156px] w-[260px] border border-black items-center px-5 py-2 rounded-md">
            <div className='flex items-center'>
                <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                <span className="font-bold text-base Bedroom">Outdoors</span>
            </div>
            <div className=' text-sm ml-6 py-2 text-my-light-grey '>
                <ul className='list-disc'>
                    <li>Dining table</li>
                    <li>Sun lounges</li>
                    <li>Sun shades</li>
                    <li>Grill</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
