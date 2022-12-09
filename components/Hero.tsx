import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-1 mx-auto mt-3 space-y-0 md:space-y-1 mb-8">
        <div className="flex flex-col xl:mb-32 space-y-12 md:w-1/2 md:pl-8 md:pt-section-feat">
          <h1 className="mb-2">
            Introduce Your Product
            <br /> Quickly &&nbsp;Effectively
          </h1>
          <p className="max-w-xl text-l leading-l font-normal  text-blue-500 mb-1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="max-w-xl text-l leading-l font-normal  text-blue-500 mb-6">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex items-center flex-col md:flex-row md:items-start">
            <Link
              href="/"
              className="py-1 font-medium text-center text-white bg-blue-800 text-xs leading-xs w-button h-button rounded-sm hover:bg-blue-600 md:mr-5 mb-1 outline outline-1 outline-gray-700"
            >
              Purchase UI Kit
            </Link>
            <Link
              href="/"
              className="py-1 font-medium text-center text-gray-700 bg-transparent text-xs leading-xs w-button h-button rounded-sm hover:bg-blue-600 outline outline-1 outline-gray-700 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
