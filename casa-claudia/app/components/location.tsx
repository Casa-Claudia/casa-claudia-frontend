import { Fish, RollerCoaster, Soup, Target } from "lucide-react";

export default function Location(){
    return (
        <div className ="location-parent">
            <div className="relative location bg-my-white px-16 py-10">
                <h2 className="text-3xl font-semibold text-black">Location</h2>
                <div className="el-list ml-10 mt-10">
                    <ul>
                        <li className="flex py-4 items-center">
                            <Fish className="mr-4 text-black" />
                            <span className="font-medium text-xl text-black">Sea: 3.5km</span>
                        </li>
                        <li className="flex py-4 items-center">
                            <Soup className="mr-4 text-black" />
                            <span className="font-medium text-xl text-black">Restaurants: 300m</span>
                        </li>
                        <li className="flex py-4 items-center">
                            <Target className="mr-4 text-black" />
                            <span className="font-medium text-xl text-black">Town: 3.5km</span>
                        </li>
                        <li className="flex py-4 items-center">
                            <RollerCoaster className="mr-4 text-black" />
                            <span className="font-medium text-xl text-black">Waterpark Istralandia: 3.3km</span>
                        </li>
                    </ul>
                </div>
                <div className="map absolute top-20 left-1/2  -translate-x-1 bg-red">
                    <img className="h-[400px] w-[600px]" src="/main_image.png" alt="map" />
                </div>

                
            </div>
            <div className="bg-khaki h-[100px]"></div>
        </div>   
    )
}