import { Camera } from "lucide-react";
import fs from 'fs';

const pictures = fs.readdirSync("./public/galerija");



export default function Viewpoint() {
    return (
        <div className="viewpoint bg-khaki h-[950px] px-16 py-10">
            <h2 className="text-3xl font-semibold text-black">Villa viewpoint</h2>
            <div className="gallery-container flex items-center justify-center h-[720px] w-[1250px] bg-red-500 mt-10 p-10 overflow-x-auto">
              <div className="text-my-white w-full grid grid-cols-3 bg-white gap-4">
                {pictures.map((picture, index) => (
                  <img
                    key={index}
                    src={`/galerija/${picture}`}
                    alt="gallery"
                    className="max-w-full max-h-full object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="view-gallery flex justify-end my-10">
                <button className="text-my-white px-5 py-2 text-xl flex items-center hover:text-black">View the full gallery <Camera className="ml-2"/></button>
            </div>
        </div> 
    )
}