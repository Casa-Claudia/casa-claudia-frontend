// icons
import { Star } from 'lucide-react';

//components
import BookBar from './components/book_bar';
import Info from './components/info';
import Viewpoint from './components/viewpoint';
import Features from './components/features';
import Location from './components/location';
import Booker from './components/booker';
import Reviews from './components/reviews';
import Gallery from './components/gallery';

export default function Home() {
  return (
    <main>
      <div className=" grid grid-cols-1 md:grid-cols-2 relative">
        <div className="intro items-left bg-light-brown md:pl-16  pl-4 py-2 text-my-black overflow-visible">
          <h1 className=" md:py-12 py-4 md:text-4xl text-3xl font-extrabold">
            {' '}
            Fresh, quiet
            <br /> and peaceful.
          </h1>
          <p className="md:mb-40 ml-5 mb-5 md:text-xl md:pr-16 pr-4">
            Enjoy the tranquility of the authentic Istrian landscape among olive trees, in
            complete privacy and  sense of homeliness in a small luxury villa.
          </p>
          <BookBar />
          <div className="py-5 flex items-center md:mt-40 justify-between md:pr-16 pr-4 ">
            <div className="md:ml-20  ml-5 flex flex-col text-sm md:text-lg items-center ">
              <p>Prices per night start from</p>
              <p className="md:text-xl font-bold">200€</p>
            </div>
            <div className="md:ml-5 flex flex-col items-center justify-start  ">
              <ul className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i} className="mr-1">
                      <Star className="md:h-7 md:w-7 h-4 w-4 fill-yellow-300 stroke-1 text-my-black" />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="big-image">
          <img className="h-full object-cover"src="/galerija/1.jpg" alt="Villa" />
        </div>
      </div>

      <Info />
      <Gallery />
      <Features />
      <Location />
      <Booker />
      <Reviews />
    </main>
  );
}
