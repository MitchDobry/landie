import React, { useRef } from "react";
import Link from "next/link";

function Header() {
  const menu = useRef<HTMLElement>(null);
  const hamburger = useRef<HTMLElement>(null);

  const handleClick = () => {
    hamburger.current?.classList.toggle("open");
    hamburger.current?.toggleAttribute("true");
    menu.current?.classList.toggle("flex");
    menu.current?.classList.toggle("hidden");
  };

  return (
    <nav className="relative mx-auto mb-3">
      <div className="flex items-center justify-between space-x-8 xl:space-x-60">
        <div className="hidden md:flex md:space-x-6 xl:space-x-7">
          <Link
            href="#hero"
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="#contact"
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
        <button
          type="button"
          aria-expanded="false"
          aria-haspopup="true"
          aria-label="Collapse or expand the menu"
          aria-controls="menu2"
          ref={hamburger as React.RefObject<HTMLButtonElement>}
          onClick={handleClick}
          className="block hamburger md:hidden focus:outline-none mt-1 right-0"
        >
          <span role="none" className="hamburger-top"></span>
          <span role="none" className="hamburger-middle"></span>
          <span role="none" className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          ref={menu as React.RefObject<HTMLDivElement>}
          className="absolute flex-col items-center hidden self-end py-8 right-0 space-y-6 bg-white sm:w-auto sm:self-center left-6 drop-shadow-md"
        >
          <Link
            role="menuitem"
            href="#hero"
            aria-hidden="true"
            onClick={handleClick}
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            role="menuitem"
            aria-hidden="true"
            href="#about"
            onClick={handleClick}
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            About
          </Link>
          <Link
            role="menuitem"
            aria-hidden="true"
            href="#contact"
            onClick={handleClick}
            className="mt-2 leading-s text-s text-blue-500 font-normal hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
