export default function Location(){
    return (
        <div className ="location-parent">
            <div className="relative location bg-my-white px-16 py-10">
                <h2 className="text-3xl font-semibold text-black">Location</h2>
                <div className="el-list ml-10 mt-10">
                    <ul>
                        <li className="flex py-4">
                            <img className="mr-2" src="/sun.svg" alt="sun picture" />
                            <span className="font-medium text-xl text-black">Sea: 3.5km</span>
                        </li>
                        <li className="flex py-4">
                            <img className="mr-2" src="/sun.svg" alt="sun picture" />
                            <span className="font-medium text-xl text-black">Restaurants: 300m</span>
                        </li>
                        <li className="flex py-4">
                            <img className="mr-2" src="/sun.svg" alt="sun picture" />
                            <span className="font-medium text-xl text-black">Town: 3.5km</span>
                        </li>
                        <li className="flex py-4">
                            <img className="mr-2" src="/sun.svg" alt="sun picture" />
                            <span className="font-medium text-xl text-black">Waterpark Istralandia: 3.3km</span>
                        </li>
                    </ul>
                </div>
                <div className="map absolute top-20 left-1/2  -translate-x-1 h-[844px] w-[586px] bg-red">
                    <img src="/main_image.png" alt="map" />
                </div>

                
            </div>
            <div className="bg-khaki h-[500px]"></div>
        </div>   
    )
}