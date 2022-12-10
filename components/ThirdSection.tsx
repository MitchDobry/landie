import React from "react";
import Link from "next/link";

function ThirdSection() {
  return (
    <section id="contact">
      <div
        className="flex flex-col max-w-xl  text-center items-center"
        style={{ margin: "auto" }}
      >
        <h2 className="lg:mt-9 xl:mt-60">A Price To Suit Everyone</h2>
        <p className="text-m leading-m font-normal  text-gray-600 mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <h4>$40</h4>
        <p className="text-m leading-m font-normal  text-blue-600 mb-7">
          UI Design Kit
        </p>
        <p className="text-s leading-s font-normal  text-gray-600 mb-2.5">
          See, One price. Simple.
        </p>
        <Link
          href="/"
          className="py-1 font-medium text-center text-white bg-blue-800 text-xs leading-xs w-button h-button rounded-sm hover:bg-blue-600  mb-1 outline outline-1 outline-gray-700"
        >
          Purchase Now
        </Link>
      </div>
    </section>
  );
}

export default ThirdSection;
