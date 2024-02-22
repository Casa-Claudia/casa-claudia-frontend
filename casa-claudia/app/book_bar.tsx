export default function BookBar(){
    return (
    <div className="w-[794px] flex text-my-grey mb-20 ml-5 z-10">
        {/* First block */}
        <div className="flex items-start justify-left bg-my-white px-10 py-2 w-1/4">
            <img className= "mr-2" src="/Location.svg" alt="Location"/>
            <div className="flex flex-col items-left justify-center">
                <button className="mb-0.5">Location</button>
                <p className="text-my-light-grey, text-sm">Hello</p>
            </div>
        </div>

        <div className="flex items-start justify-center bg-my-white px-0.5 py-2 w-1/4">
            <img className= "mr-2" src="/Calendar.svg" alt="Location"/>
            <div className="flex flex-col items-left justify-center">
                <button className="mb-0.5">Check In</button>
                <p className="text-my-light-grey, text-sm">Hello</p>
            </div>
        </div>

        <div className="flex items-start justify-center bg-my-white px-0.5 py-2 w-1/4">
            <img className= "mr-2" src="/Calendar.svg" alt="Location"/>
            <div className="flex flex-col items-left justify-center">
                <button className="mb-0.5">Check Out</button>
                <p className="text-my-light-grey, text-sm">Hello</p>
            </div>
        </div>


        <div className="flex items-center justify-center w-1/4 px-0.5 py-2     bg-my-grey">
            <div className="flex flex-col items-center justify-center">
                <button className="mb-0.5 text-my-white">Book Now</button>
            </div>
        </div>

    </div>
    )
}