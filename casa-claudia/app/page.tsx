import Topbar from "./topbar";
import BookBar from "./book_bar";
export default function Home() {
  return (
    <div className="font-sans">
      <Topbar />
      <div className="flex">
        <div className=" items-left bg-light-brown text-my-black px-16 py-2 w-1/2">
        <h1 className=" font-bold text-4xl py-12"> Fresh, quiet<br /> and peaceful.</h1>
        <p className="ml-5 mb-10">Enjoy the tranquility of the authentic Istrian landscape among <br/> olive trees, in complete privacy and  sense of homeliness in a small <br/> luxury villa.</p>
        <BookBar />
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center px-5">
            <p>Prices per night start from</p>
            <p className="font-bold text-xl">200€</p>
          </div>
          <div className="flex flex-col items-center ml-5">
            <p>*******</p>
          </div>
        </div>
      </div>
        <div className="bg-blue w-1/2">
          <img className="w-full object-cover" src="/main_image.png" alt="Villa" />
        </div>
      </div>
    </div>
  );
}