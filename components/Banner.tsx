import React from "react";
// import banner from "/bg5.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" w-full  flex items-center justify-center  ">
      <div className="max-w-full container flex flex-col gap-20 lg:gap-0 lg:flex-row justify-evenly items-start ">
        <section className="w-full lg:w-1/2 flex flex-col justify-center items-center ">
          <h1 className="w-full text-logo text-5xl md:text-6xl lg:text-7xl  xl:text-8xl font-bold font-logo text-center  xl:text-center ">
            DARK CAFE
          </h1>
          <p className="w-3/4   text-center lg:text-start  lg:ps-5 xl:ps-0 ps-0  xl:text-justify  text-lg md:text-xl lg:text-2xl  text-sub font-bold mt-4">
            The smell of fresh-made coffee is one of the world&apos;s greatest
            inventions!! Rise and grind, it&apos;s coffee time!
          </p>
          <div className="space-x-6 mt-8 ms-4">
            <button className="h-10 text-md md:text-lg  lg:text-xl text-logo border-2 border-secondary rounded-lg px-3 ">
              Shop Now
            </button>
            <button className="h-10 text-md md:text-lg lg:text-xl text-logo border-2 border-secondary rounded-lg px-3">
              Catalog
            </button>
          </div>
        </section>
        <div className="w-full lg:w-1/3 flex justify-center items-center pb-10 ">
          <Image
            className="border-4 border-secondary rounded-xl w-img w-[20rem] xs sm:w-imgsm md:w-imgmd lg:w-img   "
            src="/bg5.jpg"
            alt="cofee"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
