import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="relative mx-auto">
      <div className="flex items-middle jmd:ustify-between md:space-x-8">
        <div className="hidden md:flex md:space-x-6">
          <Link
            href="/"
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/"
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="/"
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
        <div className="mt-1 text-xl leading-xl text-blue-primary text-landie font-black ">
          <span>Landie</span>
        </div>
        <Link
          href="/"
          className="hidden md:block mt-2 py-1 font-medium text-center text-white bg-blue-800 text-xs leading-xs w-button h-button rounded-sm hover:bg-blue-600"
        >
          Buy Now
        </Link>
      </div>
    </nav>
  );
}

export default Header;
