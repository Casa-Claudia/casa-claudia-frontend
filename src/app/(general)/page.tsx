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
      <div className="flex h-[580px]">
        <div className="intro items-left w-1/2 bg-light-brown px-16 py-2 text-my-black">
          <h1 className=" py-12 text-4xl font-extrabold">
            {' '}
            Fresh, quiet
            <br /> and peaceful.
          </h1>
          <p className="mb-40 ml-5">
            Enjoy the tranquility of the authentic Istrian landscape among <br /> olive trees, in
            complete privacy and  sense of homeliness in a small <br /> luxury villa.
          </p>
          <BookBar />
          <div className="mt-5 flex items-center justify-between">
            <div className="ml-20 flex flex-col items-center">
              <p>Prices per night start from</p>
              <p className="text-xl font-bold">200€</p>
            </div>
            <div className="ml-5 flex flex-col items-center">
              <ul className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i} className="mr-1">
                      <Star className="h-7 w-7 fill-yellow-300 stroke-1 text-my-black" />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="big-image w-1/2">
          <img className="" src="/main_image.png" alt="Villa" />
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
