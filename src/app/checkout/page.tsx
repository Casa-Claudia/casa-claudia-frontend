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
      <ReservationForm />
      <Footer />
    </div>
  );
}
