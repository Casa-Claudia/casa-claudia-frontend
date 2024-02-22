export default function Features(){
    return (
        <div className="features bg-my-white px-16 py-10">
            <h2 className="text-3xl font-semibold mb-10 text-black">Features</h2>
            <div className="flex flex-wrap px-10">
        {/* First Row */}
            <div className="w-1/3 p-4">
                <div className='feature flex items-center'>
                    <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                    <span className="font-semibold text-xl text-black Bedroom">Complete privacy</span>
                </div>
                <div className=' text-sm ml-12 py-2 text-my-light-grey '>
                    <p>Feature desc</p>
                </div>
            </div>
            <div className="w-1/3 p-4">
                <div className='feature flex items-center'>
                    <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                    <span className="font-semibold text-xl text-black Bedroom">Garden furniture</span>
                </div>
                <div className=' text-sm ml-12 py-2 text-my-light-grey '>
                    <p>Feature desc</p>
                </div>
            </div>
            <div className="w-1/3 p-4">
                <div className='feature flex items-center'>
                    <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                    <span className="font-semibold text-xl text-black Bedroom">Fully fenced yard</span>
                </div>
                <div className=' text-sm ml-12 py-2 text-my-light-grey '>
                    <p>Feature desc</p>
                </div>
            </div>

            {/* Second Row */}
            <div className="w-1/3 p-4">
                <div className='feature flex items-center'>
                    <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                    <span className="font-semibold text-xl text-black Bedroom">Heated pool</span>
                </div>
                <div className=' text-sm ml-12 py-2 text-my-light-grey '>
                    <p>Feature desc</p>
                </div>
            </div>
            <div className="w-1/3 p-4">
                <div className='feature flex items-center'>
                    <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                    <span className="font-semibold text-xl text-black Bedroom">Pets allowed</span>
                </div>
                <div className=' text-sm ml-12 py-2 text-my-light-grey '>
                    <p>Feature desc</p>
                </div>
            </div>
            <div className="w-1/3 p-4">
                <div className='feature flex items-center'>
                    <img className= "mr-2" src="/sun.svg" alt="sun picture" />
                    <span className="font-semibold text-xl text-black Bedroom">Quiet area</span>
                </div>
                <div className=' text-sm ml-12 py-2 text-my-light-grey '>
                    <p>Feature desc</p>
                </div>
            </div>
            </div>
        </div>


    );
}