import Link from "next/link"

export default function Details() {
    return (
        <div className="details bg-light-brown h-[430px]">
            <h1 className="text-4xl font-bold text-my-black px-16">Complete your booking</h1>
            <p className="text-xl text-my-light-grey px-16 font-medium ">Secure your spot in Casa Claudia today.</p>
            <div className="flex items-start mt-10">
                <div className="img-container bg-my-black w-2/5">
                    <img src="/booking_image.png" alt=""  className="" />
                </div>
                <div className="details-container px-10 py-5">
                    <h2 className="text-2xl font-semibold text-my-black">Details</h2>
                    <div className="flex flex-wrap text-my-black">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="bg-gray-200 p-4">
                                <div className="flex">
                                    <div className=" flex h-[55px] w-[55px] border border-khaki items-center justify-center rounded-full">
                                        <img src="/location.svg" alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold">Location</h3>
                                        <p className="text-sm">Novigrad, Croatia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-4">
                                <div className="flex">
                                        <div className=" flex h-[55px] w-[55px] border border-khaki items-center justify-center rounded-full">
                                            <img src="/location.svg" alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">Travel period</h3>
                                            <p className="text-sm">1.11.2023 - 23.11.2023<br/> (5 nights)</p>
                                        </div>
                                    </div>
                                </div>
                            <div className="bg-gray-200 p-4">
                                <div className="flex">
                                        <div className=" flex h-[55px] w-[55px] border border-khaki items-center justify-center rounded-full">
                                            <img src="/location.svg" alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">Price</h3>
                                            <p className="text-sm">750€</p>
                                        </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-4">
                                <div className="flex">
                                    <div className=" flex h-[55px] w-[55px] border border-khaki items-center justify-center rounded-full">
                                        <img src="/guest-logo.svg" alt="" className="h-[35px]"/>
                                    </div>
                                    <div className="flex ml-4 items-center">
                                        <h3 className="text-lg">4 guests</h3>
                                    </div>
                                </div>   
                            </div>
                            <div className="bg-gray-200 p-4">
                                <div className="flex">
                                        <div className=" flex h-[55px] w-[55px] border border-khaki items-center justify-center rounded-full">
                                            <img src="/grill.svg" alt="" className="h-[35px]"/>
                                        </div>
                                        <div className="flex ml-4 items-center">
                                            <h3 className="text-lg">outdoor grill</h3>
                                        </div>
                                    </div>   
                            </div>
                            <div className="bg-gray-200 p-4">
                                <div className="flex">
                                    <div className=" flex h-[55px] w-[55px] border border-khaki items-center justify-center rounded-full">
                                        <img src="/swimming-pool.svg" alt="" className="h-[35px]" />
                                    </div>
                                    <div className="flex ml-4 items-center">
                                        <h3 className="text-lg">swimming pool</h3>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <p className="text-my-black">Not happy with the details? Change your booking <Link href="/" className="hover:underline"> here.</Link> </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}