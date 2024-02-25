import TopbarCheckout from "./components/topbar_checkout";
import Details from "./components/details";

export default function CheckoutPage() {
    return (
        <div className="checkout-page">
            <TopbarCheckout />
            <Details />

            <div className="flex justify-center items-center bg-white">
            </div>
        </div>
    );
}