import { Camera } from 'lucide-react';
import Gallery from './gallery';

export default function Viewpoint() {
  return (
    <div className="viewpoint h-[950px] bg-khaki md:px-16 md:py-10 px-4 py-5">
      <h2 className="md:text-3xl text-2xl font-semibold text-black">Villa viewpoint</h2>
      <div className="gallery-container mt-10 flex h-[720px] w-[1250px] items-center justify-center bg-white px-10 py-5">
          <Gallery />
        <div className="w-full gap-4 bg-white text-my-white">
        </div>
      </div>
      <div className="view-gallery my-10 flex justify-end">
        <button className="flex items-center px-5 py-2 text-xl text-my-white hover:text-black">
          View the full gallery <Camera className="ml-2" />
        </button>
      </div>
    </div>
  );
}
