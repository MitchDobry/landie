import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="hidden md:inline-flex items-center space-x-5">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>

      <Link href="/">
        <h1 className="font-bold text-3xl text-blue-900">Landie</h1>
      </Link>

      <div className="flex items-center text-white space-x-5">
        <h3 className="py-1 px-4 bg-blue-900 rounded-full ">Buy Now</h3>
      </div>
    </header>
  );
}

export default Header;
