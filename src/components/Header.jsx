import React from 'react';
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa'; // Using react-icons

function Header() {
  return (
    <header className="border-b shadow-sm">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4">
        {/* Left - Logo Icon */}
        <div>
          <img src="/images/Logo.png" alt="Logo" className="h-8 w-8" />
        </div>

        {/* Center - Text Logo */}
        <div className="text-2xl font-extrabold tracking-wide">LOGO</div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-6 text-xl">
          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <div className="flex items-center space-x-1 cursor-pointer text-sm font-medium">
            <span>ENG</span>
            <span>▼</span>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="flex justify-center space-x-10 py-3 font-bold text-sm uppercase">
        <a href="#" className="hover:underline">Shop</a>
        <a href="#" className="hover:underline">Skills</a>
        <a href="#" className="hover:underline">Stories</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </header>
  );
}

export default Header;
