export default function Booker() {
  return (
    <div className="booker-container bg-khaki md:px-16 px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-black">Book your spot</h1>
      <div className="flex items-center justify-between pr-10">
        <p>Secure, simple and fast</p>
        <button className="rounded border border-my-white bg-my-brown px-5 py-2 text-my-white">
          Clear dates
        </button>
      </div>
      <div className="mt-5 flex items-center justify-center pr-10">
        <div className="h-[560px] w-full bg-my-white"></div>
      </div>
      <div className="mt-5 flex items-center justify-between px-5 py-2 pr-10">
        <div className="flex w-2/3 justify-between">
          <div>
            <p className="text-xl font-semibold text-black">Selected dates:</p>
            <p className="font-semibold text-my-white">1.11.2023 - 23.11.2023 (5 nights)</p>
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
          <div>
            <div>
              <p className="text-xl font-semibold text-black">Price:</p>
              <p className="font-semibold text-my-white">700€</p>
            </div>
          </div>
        </div>
        <button className="w w-[170px] rounded-br-lg rounded-tr-lg border-2 border-my-white bg-black px-6 py-3 text-xl font-bold">
          Book
        </button>
      </div>
    </div>
  );
}
