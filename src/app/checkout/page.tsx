import TopbarCheckout from './components/topbar_checkout';
import Details from './components/details';
import ReservationForm from './components/reservation_form';
import Footer from '../(general)/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Checkout page',
};
export default function CheckoutPage() {
  return (
    <div className="checkout-page">
      <TopbarCheckout />
      <Details />
      <form>
        <div className="md:my-32 my-16 2xl:mt-48 2xl:mb-32 grid grid-cols-1 lg:grid-cols-2 bg-white px-4 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center justify-center lg:px-10">
            <h1 className="text-2xl font-bold text-black">PERSONAL DETAILS</h1>
            <ReservationForm />
          </div>

          <div className="flex flex-col items-center justify-start my-10 lg:mt-0">
            <div className="flex flex-col items-center justify-start">
              <h1 className="mb-10 text-2xl font-bold text-black">PAYMENT METHODS</h1>
              <div className="flex flex-col items-start">
                <div className="flex max-w-[590px]  justify-between rounded-lg border border-black lg:px-12 px-6 py-5 md:py-10">
                  <div className="flex items-center justify-center">
                    <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3 lg:h-4 lg:w-4" required={true} />
                    <label htmlFor="creditCard" className="text-lg font-semibold text-black">
                      CREDIT CARD
                    </label>
                  </div>
                  <div>
                    <img src="/Cards.svg" alt="credit card" className="" />
                  </div>
                </div>

                {/* <div className="mt-8 flex  w-full max-w-[590px] justify-between rounded-lg border border-black lg:px-12 px-6 py-5 md:py-10">
                  <div className="flex items-center justify-center">
                    <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3 lg:h-4 lg:w-4" />
                    <label htmlFor="creditCard" className="text-lg font-semibold text-black">
                      CASH
                    </label>
                  </div>
                </div> */}
                <div className="mt-6 flex items-center justify-center px-12">
                  <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3" required={true} />
                  <label htmlFor="creditCard" className="text-sm text-my-light-grey">
                    I agree to terms and conditions
                  </label>
                </div>
                <div className="relative mt-6 w-full px-12">
                  <button type="submit" className="text-bold absolute right-0 top-0 mr-2 w-[150px] scale-105 transform rounded-br-lg  rounded-tr-lg bg-my-black px-8 py-3 text-white hover:border hover:border-white hover:font-bold">
                    BOOK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
