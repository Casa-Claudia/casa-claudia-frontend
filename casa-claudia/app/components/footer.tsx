import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="footer-container bg-khaki px-16 py-10">
            <div className="flex justify-between px-30">
                <div className="footer-column flex flex-col items-center w-1/3">
                    <h3 className="text-my-white font-bold text-lg">Contact Us</h3>
                    <div className="flex items-center mt-2">
                        <img src="/Mail.svg" alt="mail logo"/>
                        <p className="text-my-white font-light ml-2"> rok.rajher8@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <img src="/Phone.svg" alt="phone logo"/>
                        <p className="text-my-white font-light ml-2"> +123 456 789</p>
                    </div>
                    {/* Add your contact information here */}
                </div>
                <div className="footer-column flex flex-col items-center w-1/3">
                    <h3 className="text-my-white font-bold text-lg mb-2">Our Policy</h3>
                    <Link href="/privacy-policy"className="text-my-white font-light hover:text-my-black mb-2">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="text-my-white font-light hover:text-my-black">Terms of Service</Link>
                    {/* Add your policy information here */}
                </div>
                <div className="footer-column flex flex-col items-center w-1/3">
                    <h3 className="text-my-white font-bold text-lg">Social Media</h3>
                    <div className="button-container mt-2">
                        <button className="text-my-white hover:text-my-black mr-2"><Facebook className="text-my-white hover:text-black"/></button>
                        <button className="text-my-white hover:text-my-black"><Instagram className="text-my-white hover:text-black"/></button>
                    </div>
                </div>
            </div>
            <div className="footer-rights flex items-center justify-center mt-20">
                <p className="text-my-white font-light">© 2024 Casa Claudia. All rights reserved.</p>
            </div>
        </div>
    )
}