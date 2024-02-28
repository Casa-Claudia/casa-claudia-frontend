export default function BookBar() {
  return (
    <div className="relative z-10 flex md:visible invisible  h-[80px] w-[864px] items-center bg-my-white text-my-grey">
      <div className="flex w-1/4 items-start px-4 py-2">
        <img className="mr-2" src="/Location.svg" alt="Location" />
        <div className="flex flex-col">
          <h2 className="mb-0.5">Location</h2>
          <p className="text-my-light-grey, text-sm">Novigrad, Croatia</p>
        </div>
      </div>

      <div className="flex w-1/4 items-start justify-center bg-my-white px-0.5 py-2">
        <img className="mr-2" src="/Calendar.svg" alt="Location" />
        <div className="flex flex-col justify-start">
          <button className="mb-0.5 transform font-semibold hover:scale-105">Check In</button>
          <p className="text-my-light-grey, text-sm">5.11.2001</p>
        </div>
      </div>

      <div className="flex w-1/4 items-start justify-center bg-my-white px-0.5 py-2">
        <img className="mr-2" src="/Calendar.svg" alt="Location" />
        <div className="items-left flex flex-col justify-center">
          <button className="mb-0.5 transform font-semibold hover:scale-105">Check Out</button>
          <p className="text-my-light-grey, text-sm">6.11.2001</p>
        </div>
      </div>
      <div className="flex h-full w-1/4 items-center justify-center bg-my-grey px-0.5  py-2">
        <button className="mb-0.5 transform text-lg text-my-white hover:scale-105 hover:font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
}
