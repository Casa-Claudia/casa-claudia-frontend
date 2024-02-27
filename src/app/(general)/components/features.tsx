import { Fence, Lock, LucideWaves, PawPrint, RockingChair, Zap } from 'lucide-react';

export default function Features() {
  return (
    <div className="features bg-my-white px-16 py-10">
      <h2 className="mb-10 text-3xl font-semibold text-black">Features</h2>
      <div className="flex flex-wrap px-10">
        {/* First Row */}
        <div className="w-1/3 p-4">
          <div className="feature flex items-center">
            <Lock className="mr-2 text-black" />
            <span className="Bedroom text-xl font-semibold text-black">Complete privacy</span>
          </div>
          <div className=" ml-10 py-1 text-sm text-my-light-grey ">
            <p>Feature desc</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="feature flex items-center">
            <RockingChair className="mr-2 text-black" />
            <span className="Bedroom text-xl font-semibold text-black">Garden furniture</span>
          </div>
          <div className=" ml-10 py-1 text-sm text-my-light-grey ">
            <p>Feature desc</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="feature flex items-center">
            <Fence className="mr-2 text-black" />
            <span className="Bedroom text-xl font-semibold text-black">Fully fenced yard</span>
          </div>
          <div className=" ml-10 py-1 text-sm text-my-light-grey ">
            <p>Feature desc</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-1/3 p-4">
          <div className="feature flex items-center">
            <LucideWaves className="mr-2 text-black" />
            <span className="Bedroom text-xl font-semibold text-black">Heated pool</span>
          </div>
          <div className=" ml-10 py-1 text-sm text-my-light-grey ">
            <p>Feature desc</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="feature flex items-center">
            <PawPrint className="mr-2 text-black" />
            <span className="Bedroom text-xl font-semibold text-black">Pets allowed</span>
          </div>
          <div className=" ml-10 py-1 text-sm text-my-light-grey ">
            <p>Feature desc</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="feature flex items-center ">
            <Zap className="mr-2 text-black" />
            <span className="Bedroom text-xl font-semibold text-black">Quiet area</span>
          </div>
          <div className=" ml-10 py-1 text-sm text-my-light-grey ">
            <p>Perfect for recharging</p>
          </div>
        </div>
      </div>
    </div>
  );
}
