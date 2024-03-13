import { Fence, Lock, LucideWaves, PawPrint, RockingChair, Squirrel, Zap } from 'lucide-react';

export default function Features() {
  return (
    <div className="features bg-my-white md:px-16 px-4   py-10">
      <h2 className="mb-10 text-3xl font-semibold text-black">Features</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 px-4 max-w-screen-2xl ">
        <div className="p-4">
          <div className="feature flex items-start lg:items-center">
            <Lock className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">Complete privacy</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>Large private outdoor area</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start">
            <RockingChair className="mr-2 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">Garden furniture</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>Comfortable sunbeds, dining table for six</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex items-start lg:items-center">
            <Squirrel className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">Nature view</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>Beautiful surroundings</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start">
            <LucideWaves className="mr-2 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">Heated pool</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>On request (additional fee)</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start">
            <PawPrint className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">Pets allowed</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>Small dog friendy</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start ">
            <Zap className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md  font-semibold text-black">Quiet area</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>Perfect for recharging</p>
          </div>
        </div>
      </div>
    </div>
  );
}
