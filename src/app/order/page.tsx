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
      <h1 className="text-3xl font-bold text-black">Thank you for your order!</h1>
      <p className="mt-5  text-black">
      Thank you for choosing Casa Claudia for your upcoming stay! We&rsquo;re thrilled to have you as our guest.<br/><br/>
      Your reservation request has been successfully received. Within moments, you should receive an initial email confirming the receipt of your reservation. This email will contain all the essential information you provided during the booking process.<br/><br/>
      Please note that it may take up to two business days for our team to confirm your reservation. Once confirmed, you&rsquo;ll receive a second email containing your receipt. This email will include the finalized details of your reservation, along with any additional information you may need. If the reservation is declined, you will also receive an email.<br/><br/>
      After receiving your receipt, you&rsquo;ll have <strong>five business days to complete the payment process </strong>. Please ensure payment within this timeframe to secure your reservation.<br/><br/>
      Once we&rsquo;ve received confirmation of your payment, we&rsquo;ll promptly finalize your booking. You&rsquo;ll then receive a confirmation email with all the necessary details for your upcoming stay at Casa Claudia.<br/><br/>
      Should you have any questions or require further assistance at any point, please feel free to reach out to us. We&rsquo;re here to ensure your reservation experience is seamless and enjoyable.<br/><br/>
      Thank you again for choosing Casa Claudia. We can&rsquo;t wait to host you and make your stay unforgettable!<br/><br/> 
      </p>
    </main>
      <Footer />
    </div>
  );
}
