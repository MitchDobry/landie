import Link from "next/link";
import React from "react";
import Image from "next/image";

import facebook from "../static/social/facebook.svg";
import instagram from "../static/social/instagram.svg";
import linkedin from "../static/social/linkedin.svg";
import twitter from "../static/social/twitter.svg";
import youtube from "../static/social/youtube.svg";

function Footer() {
  return (
    <footer className="bg-blue-100">
      <div className="items-center justify-between px-6 py-10 mx-auto md:flex-row md:px-40">
        <div className="items-center justify-between sm:flex md:space-x-8">
          <p className="text-s leading-s font-medium  text-gray-400">
            ©2020 Yourcompany
          </p>
          <div className="text-xl leading-xl text-blue-primary text-landie font-black mr-1">
            <span>Landie</span>
          </div>

          <Link
            href="/"
            className="py-1 font-medium text-center text-white bg-blue-800 text-xs leading-xs w-button h-button rounded-sm hover:bg-blue-600 outline outline-1 outline-gray-700"
          >
            Purchase Now
          </Link>
        </div>
        <div
          className="bg-gray-200"
          style={{
            height: "1px",
            width: "100%",
            marginTop: "40px",
          }}
        ></div>
        <div className="justify-between md:flex md:space-x-8 items-center mt-2">
          <div className="justify-between mb-2 space-x-6 text-center md:text-left md:flex md:space-x-6 md:mb-0">
            <Link
              href="#hero"
              className="leading-s text-s text-blue-300 font-normal hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="leading-s text-s text-blue-300 font-normal hover:text-gray-400"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="leading-s text-s text-blue-300 font-normal hover:text-gray-400"
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-between space-x-6 items-center">
            <Link href="/">
              <Image
                width={8}
                height={16}
                src={facebook}
                alt={"facebook icon"}
              />
            </Link>
            <Link href="/">
              <Image
                width={16}
                height={16}
                src={linkedin}
                alt={"inkedin icon"}
              />
            </Link>
            <Link href="/">
              <Image
                width={16}
                height={13}
                src={twitter}
                alt={"twitter icon"}
              />
            </Link>
            <Link href="/">
              <Image
                width={16}
                height={11}
                src={youtube}
                alt={"youtube icon"}
              />
            </Link>
            <Link href="/">
              <Image
                width={16}
                height={16}
                src={instagram}
                alt={"instagram icon"}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
