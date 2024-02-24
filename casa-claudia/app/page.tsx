import Topbar from "./components/topbar";
import BookBar from "./components/book_bar";
import Info from "./components/info";
import Viewpoint from "./components/viewpoint";
import Features from "./components/features";
import Location from "./components/location";
import Booker from "./components/booker";
import Reviews from "./components/reviews";
import Footer from "./components/footer";



import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  return (
    <div className="font-sans">
      <Topbar />
      <div className="flex h-[600px]">
          <div className="intro items-left bg-light-brown text-my-black px-16 py-2 w-1/2">
          <h1 className=" font-extrabold text-4xl py-12"> Fresh, quiet<br /> and peaceful.</h1>
          <p className="ml-5 mb-40">Enjoy the tranquility of the authentic Istrian landscape among <br/> olive trees, in complete privacy and  sense of homeliness in a small <br/> luxury villa.</p>
          <BookBar />
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center ml-20 px-5">
              <p>Prices per night start from</p>
              <p className="font-bold text-xl">200€</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <FontAwesomeIcon icon={faStar} height />
            </div>
          </div>
        </div>
        <div className="big-image w-1/2">
          <img className="" src="/main_image.png" alt="Villa" />
        </div>
      </div>
      <Info />
      <Viewpoint />
      <Features />
      <Location />
      <Booker />
      <Reviews />
      <Footer />
    </div>
  );
}