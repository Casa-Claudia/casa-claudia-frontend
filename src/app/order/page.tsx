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
      <main className="bg-my-white md:px-32 px-4 py-16">
      <h1 className="text-3xl font-bold text-black">Thank you for your oder</h1>
      <p className="mt-5  text-black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis suscipit maxime esse quaerat
        reprehenderit quibusdam molestias iusto facere optio alias expedita itaque aliquam aut,
        cumque delectus, doloremque facilis sunt saepe ab. Porro ex voluptatum tempora,
        exercitationem quas in eum quisquam atque perferendis sunt itaque animi rem quaerat minima
        quia. Amet?
      </p>
    </main>
      <Footer />
    </div>
  );
}
