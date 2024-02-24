import Topbar	 from "../components/topbar";
import Footer from "../components/footer";

export default function TermsOfService() {
  return (
    <div>
      <Topbar />
      <div className="py-16 px-32 bg-my-white">
        <h1 className="text-black font-bold text-3xl">Terms of service</h1>
        <p className ="text-black  mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis suscipit maxime esse quaerat reprehenderit quibusdam molestias iusto facere optio alias expedita itaque aliquam aut, cumque delectus, doloremque facilis sunt saepe ab. Porro ex voluptatum tempora, exercitationem quas in eum quisquam atque perferendis sunt itaque animi rem quaerat minima quia. Amet?</p>
      </div>
      <Footer />
    </div>
  );
}