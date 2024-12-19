import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center bg-white px-6 md:px-8 py-4 shadow-md border-b border-gray-200 z-50">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/logo.png"
            alt="Decorative image"
            width={150}
            height={150}
          />
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">
            Welcome
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">
            Methodology
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">
            Price Plan
          </a>
        </nav>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-black bg-green-200 border border-green-200 rounded-lg hover:bg-green-300 transition">
            Try free now!
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
