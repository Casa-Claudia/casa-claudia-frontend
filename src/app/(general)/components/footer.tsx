import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-container bg-khaki md:px-16 px-4 py-10" id='footer'>
      <div className="px-5 grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto">
        <div className="footer-column md:mt-0 flex  flex-col items-center">
          <h3 className="md:text-lg font-bold text-my-white">Contact Us</h3>
          <div className="mt-2 flex items-center">
            <img src="/Mail.svg" alt="mail logo" />
            <p className="ml-2 font-light text-my-white"> rok.rajher8@gmail.com</p>
          </div>
          <div className="mt-2 flex items-center">
            <img src="/Phone.svg" alt="phone logo" />
            <p className="ml-2 font-light text-my-white"> +123 456 789</p>
          </div>
          {/* Add your contact information here */}
        </div>
        <div className="footer-column md:mt-0 mt-5 flex  flex-col items-center">
          <h3 className="mb-2 md:text-lg font-bold text-my-white">Our Policy</h3>
          <Link
            href="/privacy-policy"
            className="mb-2 font-light text-my-white hover:text-my-black"
          >
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-light text-my-white hover:text-my-black">
            Terms of Service
          </Link>
          {/* Add your policy information here */}
        </div>
        <div className="footer-column md:mt-0 mt-5 flex  flex-col items-center">
          <h3 className="md:text-lg font-bold text-my-white">Social Media</h3>
          <div className="button-container mt-2 flex">
            <Link className="mr-2 text-my-white hover:text-my-black" target='_blank' href={"https://www.facebook.com/KlubKulturnihUstvarjalcev/"}>
              <Facebook className="text-my-white hover:text-black" />
            </Link>
            <Link className="text-my-white hover:text-my-black" target='_blank' href={"https://www.facebook.com/KlubKulturnihUstvarjalcev/"}>
              <Instagram className="text-my-white hover:text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-rights mt-20 flex items-center justify-center text-center">
        <p className="font-light text-my-white">© 2024 Casa Claudia. All rights reserved.</p>
      </div>
    </div>
  );
}
