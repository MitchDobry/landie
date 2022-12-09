import React from "react";
import Image from "next/image";

import icon from "../static/icon.svg";
import mobile from "../static/mobile_login.svg";

function FirstSection() {
  return (
    <section id="features">
      <div className="container flex flex-col-reverse mx-auto mt-10 md:space-y-0 md:flex-row lg:mb-24">
        <div className="flex flex-col lg:pl-114 md:w-73 lg:w-51">
          <h2>Light, Fast&nbsp;&&nbsp;Powerful</h2>
          <p className="text-m leading-m font-normal  text-gray-600 mb-1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-m leading-m font-normal  text-gray-600 mb-6">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex mt-5">
            <div className="flex-column md:w-1/2 mr-5">
              <Image
                width={36}
                height={36}
                src={icon}
                alt="icon"
                className="mb-3"
              ></Image>
              <h3>Title Goes Here</h3>
              <p className="text-xs leading-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className="flex-column  md:w-1/2">
              <Image
                width={36}
                height={36}
                src={icon}
                alt="icon"
                className="mb-3"
              />
              <h3>Title Goes Here</h3>
              <p className="text-xs leading-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
        <Image
          width={524}
          height={473}
          src={mobile}
          alt="icon mobile login"
          className="hidden md:flex ml-5"
        />
      </div>
    </section>
  );
}

export default FirstSection;
