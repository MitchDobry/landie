import React from "react";
import Image from "next/image";

import happyNews from "../static/undraw_happy_new.svg";

function SecondSection() {
  return (
    <section id="about">
      <div className="container flex flex-col mx-auto mt-12 md:space-y-0 md:flex-row mb-32">
        <Image
          width={480}
          height={315}
          src={happyNews}
          alt="icon"
          className="hidden md:flex xl:ml-48"
        />
        <div className="flex flex-col md:pl-8 lg:pt-121 xl:pl-155  md:w-73 lg:w-42">
          <h2>Light, Fast &&nbsp;Powerful</h2>
          <p className="text-m leading-m font-normal  text-gray-600 mb-1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-m leading-m font-normal  text-gray-600 mb-6">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
