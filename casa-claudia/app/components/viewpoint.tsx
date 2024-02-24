export default function Viewpoint() {
    return (
        <div className="viewpoint bg-khaki h-[950px] px-16 py-5">
            <h2 className="text-3xl font-semibold text-black">Villa viewpoint</h2>
            <div className ="gallery-container flex items-center justify-center h-[720px] w-[1250px] bg-red" >
                    <p className="text-my-white">Here goes the gallary</p>
            </div>
            <div className="view-gallery flex justify-end my-20">
                <button className="text-my-white px-5 py-2 text-xl flex items-center hover:text-black">View the full gallery <img src="Camera.svg" className="ml-2"/></button>
            </div>
        </div> 
    )
}