import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <div className="relative w-full   bg-primary gap-10   flex flex-col justify-start ">
      {/* <Navbar/> */}
      <section className="relative w-1/2 max-sm:w-[18rem]  sm:max-lg:w-[18rem] mt-20  lg:w-4/5 container mx-auto  flex flex-col lg:flex-row items-center justify-center border-4 border-sub bg-sub rounded-lg ">
        <h1 className=" absolute z-40 -top-9 md:-top-8 max-sm:z-10 sm:z-10 lg:-top-12 right-2 text-logo text-5xl lg:text-7xl font-logo font-bold">
          About Us
        </h1>
        <Image
          className="w-abt lg:w-abt2 object-cover max-sm:w-[18rem] sm:w-[18rem] border-2 border-secondary w-[15rem]"
          src="/wp2.jpg"
          alt="cofee"
          width="50"
          height="50"
        />
        <p className="w-auto lg:w-4/5  px-4 text-card text-justify text-md lg:text-lg font-default mt-5 mb-5 lg:mb-0 lg:mt-0 ">
          Dark Cafe is a hidden gem nestled in the heart of the city, exuding an
          intimate and mysterious ambiance. The dimly lit interior creates an
          atmosphere of intrigue, perfect for those seeking refuge from the
          bustling outside world. Its specialty lies in its rich, bold brews,
          tantalizing the taste buds with deep flavors and robust aromas.
          Patrons often find themselves immersed in conversation or lost in
          thought amidst the comforting embrace of Dark Cafe&apos;s enigmatic
          setting
        </p>
      </section>
      <ul className="flex flex-row gap-5 mt-8 justify-center">
        <li className="w-2 h-2 border-8 border-sub rounded-xl"></li>
        <li className="w-6 h-4 border-8 border-card  rounded-xl"></li>
        <li className="w-2 h-2 border-8 border-sub  rounded-xl"></li>
      </ul>
    </div>
  );
};

export default About;
