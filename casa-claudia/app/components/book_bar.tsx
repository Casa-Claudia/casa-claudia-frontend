export default function BookBar(){
    return (
    <div className="w-[864px] h-[90px] relative  flex items-center bg-my-white text-my-grey z-10">
        
        <div className="flex items-start px-4 py-2 w-1/4">
            <img className="mr-2" src="/Location.svg" alt="Location"/>
            <div className="flex flex-col justify-start">
                <button className="mb-0.5">Location</button>
                <p className="text-my-light-grey, text-sm">Novigrad, Croatia</p>
            </div>
        </div>

        <div className="flex items-start justify-center bg-my-white px-0.5 py-2 w-1/4">
            <img className= "mr-2" src="/Calendar.svg" alt="Location"/>
            <div className="flex flex-col justify-start">
                <button className="mb-0.5">Check In</button>
                <p className="text-my-light-grey, text-sm">5.11.2001</p>
            </div>
        </div>

        <div className="flex items-start justify-center bg-my-white px-0.5 py-2 w-1/4">
            <img className= "mr-2" src="/Calendar.svg" alt="Location"/>
            <div className="flex flex-col items-left justify-center">
                <button className="mb-0.5">Check Out</button>
                <p className="text-my-light-grey, text-sm">6.11.2001</p>
            </div>
        </div>
        <div className="flex items-center h-full justify-center w-1/4 px-0.5 py-2  bg-my-grey">
            <button className="mb-0.5 text-my-white">Book Now</button>
        </div>

    </div>
    )
}