import Cal from "./calendar/calendar";

export default function Booker() {
  return (
    <div className="booker-container bg-khaki md:px-16 px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-black">Book your spot</h1>
      <p >Secure, simple and fast</p>
      <div className ="container max-w-screen-lg">
      <div className="flex items-center md:justify-end justify-center mt-4 md:mt-0 gap-4 md:pr-10 md:text-md text-sm">
        <button className="rounded border border-my-white bg-my-brown px-5 py-2 text-my-white">
          Clear dates
        </button>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div className="container w-full text-black">
          <Cal />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-5 md:px-5 py-2 md:pr-10 gap-2">
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
        <button className="max-w-[170px] w-full rounded-br-lg rounded-tr-lg border-2 border-my-white bg-black md:px-6 md:py-3 px-3 py-2 md:text-xl text-lg font-bold">
          Book
        </button>
        </div>
      </div>

      </div>

    </div>
  );
}
