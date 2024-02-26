import Topbar	 from "../components/topbar";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Topbar />
      <div className="py-16 px-32 bg-my-white">
        <h1 className="text-black font-bold text-3xl">Privacy Policy</h1>
        <p className ="text-black  mt-5">Your privacy is important to us. It is Casa Claudia's policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://www.casaclaudia.com">http://www.casaclaudia.com</a>, and other sites we own and operate.</p>
      </div>
      <Footer />
    </div>
  );
}