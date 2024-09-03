import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white bg-black p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo and Contact */}
        <div>
          <p className='mb-4'>MIRICO RI COLI</p>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm mb-1">
            <strong>Address:</strong> 236 Harambee Hse, strt 5, Nairobi
          </p>
          <p className="text-sm mb-1">
            <strong>Phone:</strong> +254713764676
          </p>
          <p className="text-sm mb-4">
            <strong>Hours:</strong> 10:00 - 18:00 Mon-Sat
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-indigo-500">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-red-500">
                <FaYoutube />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-red-600">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Delivery Information</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-lg font-semibold mb-4">My Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Sign In</a></li>
            <li><a href="#" className="hover:underline">View Cart</a></li>
            <li><a href="#" className="hover:underline">My WishList</a></li>
            <li><a href="#" className="hover:underline">Track My Order</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

        <div className="col">
            <h4 className="text-lg font-semibold mb-4">Sign Up For Newsletter</h4>
            <p className="text-sm mb-4">Get E-mail updates about our latest shop and special offers</p>
            <form className="flex flex-col">
                <input
                type="name"
                placeholder="Your name"
                className="mb-4 px-4 py-2 border border-black"
                required
                />
                <input
                type="email"
                placeholder="Your email address"
                className="mb-4 px-4 py-2 border border-black"
                required
                />
                <button
                type="submit"
                className="bg-amber-900 text-white py-2 px-4 border-white hover:bg-amber-950 "
                >
                SUBSCRIBE
                </button>
            </form>
        </div>


      </div>
        <div className="border-t border-gray-700 pt-4">
            <p className="text-center text-sm">&copy; {new Date().getFullYear()} MIRICO RI COLI, Nairobi</p>
      </div>

    </footer>
  );
};

export default Footer;
