import TopbarCheckout from '../checkout/components/topbar_checkout';
import Footer from '../(general)/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order',
  description: 'Order page',
};
export default function Order() {
  return (
    <div className="order">
      <TopbarCheckout />
      <Footer />
    </div>
  );
}
