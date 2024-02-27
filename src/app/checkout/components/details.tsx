import Link from 'next/link';

export default function Details() {
  return (
    <div className="details h-[430px] bg-light-brown">
      <h1 className="px-16 text-4xl font-bold text-my-black">Complete your booking</h1>
      <p className="px-16 text-xl font-medium text-my-light-grey ">
        Secure your spot in Casa Claudia today.
      </p>
      <div className="mt-10 flex items-start">
        <div className="img-container w-2/5 bg-my-black">
          <img src="/booking_image.png" alt="" className="" />
        </div>
        <div className="details-container px-10 py-5">
          <h2 className="text-2xl font-semibold text-my-black">Details</h2>
          <div className="flex flex-wrap text-my-black">
            <div className="grid grid-cols-3 gap-1">
              <div className="p-4">
                <div className="flex">
                  <div className=" flex h-[55px] w-[55px] items-center justify-center rounded-full border border-khaki">
                    <img src="/location.svg" alt="" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className=" ml-1">Novigrad, Croatia</p>
                  </div>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex">
                  <div className=" flex h-[55px] w-[55px] items-center justify-center rounded-full border border-khaki">
                    <img src="/location.svg" alt="" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Travel period</h3>
                    <p className="ml-1 text-sm">
                      1.11.2023 - 23.11.2023
                      <br /> (5 nights)
                    </p>
                  </div>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex">
                  <div className=" flex h-[55px] w-[55px] items-center justify-center rounded-full border border-khaki">
                    <img src="/location.svg" alt="" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Price</h3>
                    <p className=" ml-1">750€</p>
                  </div>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex">
                  <div className=" flex h-[55px] w-[55px] items-center justify-center rounded-full border border-khaki">
                    <img src="/guest-logo.svg" alt="" className="h-[35px]" />
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="text-lg ">4 guests</h3>
                  </div>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex">
                  <div className=" flex h-[55px] w-[55px] items-center justify-center rounded-full border border-khaki">
                    <img src="/grill.svg" alt="" className="h-[35px]" />
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="text-lg">outdoor grill</h3>
                  </div>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex">
                  <div className=" flex h-[55px] w-[55px] items-center justify-center rounded-full border border-khaki">
                    <img src="/swimming-pool.svg" alt="" className="h-[35px]" />
                  </div>
                  <div className="ml-4 flex items-center">
                    <h3 className="text-lg">swimming pool</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <p className="text-my-black">
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
