import { Camera } from "lucide-react";
import Gallery from "./gallery";
import { Photo } from "react-photo-album";




export default function Viewpoint({pictures}: {pictures: string[]}) {

    return (
        <div className="viewpoint bg-khaki h-[950px] px-16 py-10">
            <h2 className="text-3xl font-semibold text-black">Villa viewpoint</h2>
            <div className="gallery-container flex items-center justify-center h-[720px] w-[1250px] mt-10 p-10">
              <div className="text-my-white w-full bg-white gap-4">
                <Gallery pictures={pictures} />
                </div>
            </div>
            <div className="view-gallery flex justify-end my-10">
                <button className="text-my-white px-5 py-2 text-xl flex items-center hover:text-black">View the full gallery <Camera className="ml-2"/></button>
            </div>
        </div> 

    )
}