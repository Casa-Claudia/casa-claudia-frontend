export default function Reviews() {
    return (
        <div className="reviews-container bg-my-white px-16 py-24">
            <h2 className="text-3xl font-semibold mb-10 text-black">Reviews</h2>
            <div className="review-box overflow-x-auto w-full">
                <div className="flex px-10">
                    <div className="review relative border-2 rounded border-my-brown h-[273px] w-[476px] p-8 mr-5">
                        <div className="flex justify-between items-center border-b border-black">
                            <p className="text-black font-semibold text-lg">Marko.P</p>
                            <p className="text-black">*****</p>
                        </div>
                        <div className="review-text mt-5">
                            <p className="font-thin text-black">“We had a great time in Casa Claudia. The villa is beautiful and the pool is amazing. We will definitely come back!”</p>
                        </div>
                        <div className="absolute bottom-0 right-0 py-2 px-4">
                            <p className="text-my-light-grey">5.11.2001</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
