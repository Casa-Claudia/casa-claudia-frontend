export default function Booker() {
    return (
        <div className="booker-container bg-khaki px-16 py-10">
            <h1 className="text-black text-3xl mb-2 font-bold">Book your spot</h1>
            <div className="flex justify-between items-center pr-10">
                <p>Secure, simple and fast</p>
                <button className="bg-my-brown text-my-white px-5 py-2 rounded border border-my-white">Clear dates</button>
            </div>
            <div className="flex justify-center items-center mt-5 pr-10">
                <div className="bg-my-white w-full h-[560px]">
                </div>
            </div>
            <div className="flex items-center mt-5 px-5 py-2 justify-between pr-10">
                <div className="flex justify-between w-2/3">
                    <div>
                        <p className="text-black text-xl font-semibold">Selected dates:</p>
                        <p className="text-my-white font-semibold">1.11.2023 - 23.11.2023 (5 nights)</p>
                    </div>
                    <div>
                    <div>
                        <p className="text-black text-xl font-semibold">Check-in:</p>
                        <p className="text-my-white font-semibold">16:00</p>
                    </div>
                    </div>
                    <div>
                    <div>
                        <p className="text-black text-xl font-semibold">Check-out:</p>
                        <p className="text-my-white font-semibold">10:00</p>
                    </div>
                    </div>
                    <div>
                    <div>
                        <p className="text-black text-xl font-semibold">Price:</p>
                        <p className="text-my-white font-semibold">700€</p>
                    </div>
                    </div>
                </div>
                   <button className="border-2 rounded-tr-lg rounded-br-lg w border-my-white w-[170px] bg-black px-6 py-3 text-xl font-bold">Book</button>
            </div>
        </div>
    )
}