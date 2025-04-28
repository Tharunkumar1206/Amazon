import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">BE THE FIRST TO KNOW</h3>
            <p className="mb-4 text-sm">Sign up for updates from your company.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="p-2 flex-grow rounded-l bg-white text-black"
              />
              <button className="p-2 bg-transparent border border-white rounded-r hover:bg-white text-black transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">CONTACT US</h3>
            <p className="text-sm mb-2">+44 221 133 5360</p>
            <p className="text-sm mb-6">customercare@yourcompany.com</p>

            <h3 className="font-bold mb-2">CURRENCY</h3>
            <p className="flex items-center gap-2 text-sm">
              <span role="img" aria-label="flag">🇺🇸</span> USD
            </p>
            <p className="text-xs mt-1 text-gray-400">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-10" />

        {/* Bottom links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* About Links */}
          <div>
            <h3 className="font-bold mb-4">Your Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliance Docs</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social & Payments */}
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex gap-4 mb-6">
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
            </div>

            <h3 className="font-bold mb-4">We Accept</h3>
            {/* <div className="flex flex-wrap gap-2">
              <img src="/path-to-mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/path-to-paypal.png" alt="Paypal" className="h-8" />
              <img src="/path-to-amex.png" alt="Amex" className="h-8" />
              <img src="/path-to-applepay.png" alt="Apple Pay" className="h-8" />
              <img src="/path-to-googlepay.png" alt="Google Pay" className="h-8" />
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
