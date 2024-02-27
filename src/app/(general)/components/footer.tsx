import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-container bg-khaki px-16 py-10">
      <div className="px-30 flex justify-between">
        <div className="footer-column flex w-1/3 flex-col items-center">
          <h3 className="text-lg font-bold text-my-white">Contact Us</h3>
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
        <div className="footer-column flex w-1/3 flex-col items-center">
          <h3 className="mb-2 text-lg font-bold text-my-white">Our Policy</h3>
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
        <div className="footer-column flex w-1/3 flex-col items-center">
          <h3 className="text-lg font-bold text-my-white">Social Media</h3>
          <div className="button-container mt-2">
            <button className="mr-2 text-my-white hover:text-my-black">
              <Facebook className="text-my-white hover:text-black" />
            </button>
            <button className="text-my-white hover:text-my-black">
              <Instagram className="text-my-white hover:text-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-rights mt-20 flex items-center justify-center">
        <p className="font-light text-my-white">© 2024 Casa Claudia. All rights reserved.</p>
      </div>
    </div>
  );
}
