import TopbarCheckout from "./components/topbar_checkout";
import Details from "./components/details";
import ReservationForm  from "./components/reservation_form";
import Footer from "../components/footer";

export default function CheckoutPage() {
    return (
        <div className="checkout-page">
            <TopbarCheckout />
            <Details />
            <div className="flex bg-white my-32">
                <div className="flex flex-col items-center justify-center w-1/2 px-10">
                    <h1 className="text-black font-bold text-2xl">PERSONAL DETAILS</h1>
                    <ReservationForm />
                </div>

                <div className="flex flex-col items-center justify-start w-1/2">
                    <div className="flex flex-col items-center justify-start">
                        <h1 className="text-black font-bold text-2xl mb-10">PAYMENT METHODS</h1>
                        <div className="flex flex-col items-start">
                            <div className="flex justify-between  w-[590px] border border-black rounded-lg px-12 py-10">
                                <div className="flex items-center justify-center">
                                    <input type="checkbox" id="creditCard" className="mr-3 h-4 w-4" />
                                    <label htmlFor="creditCard" className="text-black font-semibold text-lg">CREDIT CARD</label>
                                </div>
                                <div>
                                    <img src="/Cards.svg" alt="credit card" className="" />
                                </div>
                            </div>

                            <div className="flex justify-between  w-[590px] border border-black rounded-lg px-12 py-10 mt-8">
                                <div className="flex items-center justify-center">
                                    <input type="checkbox" id="creditCard" className="mr-3 h-4 w-4" />
                                    <label htmlFor="creditCard" className="text-black font-semibold text-lg">CASH</label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-6 px-12">
                                    <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3" />
                                    <label htmlFor="creditCard" className="text-my-light-grey text-sm">I agree to  terms and conditions</label>
                            </div>
                            <div className="relative mt-6 px-12 w-full">
                                <button className="bg-my-black w-[150px] absolute top-0 right-0 text-white px-8 py-3 rounded-tr-lg  text-bold rounded-br-lg mr-2 hover:font-bold transform scale-105 hover:border hover:border-white">BOOK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}