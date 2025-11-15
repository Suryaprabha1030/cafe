import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Services = () => {
  const data = [
    {
      icon: "/coffee-filter.png",
      name: "FreshBrewe",
    },
    {
      icon: "/take-away.png",
      name: "Takeaway",
    },
    {
      icon: "/restaurant.png",
      name: "Dine-in",
    },
    {
      icon: "/wifi.png",
      name: "Free-Wifi",
    },
    {
      icon: "/cake.png",
      name: "Pastry",
    },
  ];
  const router = useRouter();
  // grid grid-cols-1 md:grid-cols-2  md:gap-3 lg:gap-10  lg:grid-cols-5 justify-items-center
  return (
    <div className="w-full  flex flex-col justify-start gap-10 bg-primary   ">
      <h1 className="text-logo text-5xl md:text-6xl lg:text-7xl font-logo font-bold text-center bg-primary mt-5 pt-10 ">
        Services
      </h1>
      <section className=" w-3/4 lg:w-5/6  xl:w-4/5 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5   gap-10 lg:gap-20 xl:gap-20 justify-items-center   ">
        {data.map((d, index) => (
          <div
            className="xl:w-44 w-40   shadow-xl  rounded-lg border-4 border-secondary bg-sub group :mt-5 mt-2 "
            key={index}
          >
            <Image
              src={d.icon}
              //   alt="wifi"
              alt={d.name}
              className="object-cover p-5"
              width={300}
              height={300}
            />

            <h1 className="max-w-full text-card font-default text-lg lg:text-xl xl:text-2xl font-bold text-center pt-4 pb-4  bg-secondary">
              {d.name}
            </h1>
          </div>
        ))}
      </section>

      <section className="relative container mx-auto w-3/4 sm:w-full lg:w-5/6 xl:w-4/5 border-4 border-sub   bg-sub flex flex-col sm:flex-row justify-center items-center  border-2 border-sub rounded-xl  mt-20">
        <span className=" w-4/5 sm:w-full lg:w-5/6 xl:w-4/5 flex flex-col justify-start  gap-5 xl:ms-10 sm:pt-5 pt-3   ">
          <h1 className="absolute -top-10 left-10 text-logo  font-logo text-5xl sm:text-6xl lg:text-7xl font-bold">
            Offer
          </h1>
          <h1 className=" text-2xl md:text-4xl lg:text-4xl font-bold font-default text-card sm:px-8  mt-3 md:mt-2 lg:mt-5">
            up to 30%
          </h1>
          <p className="max-w-full  text-justify sm:px-8 text-card text-md lg:text-lg font-default ">
            Indulge in the rich aroma and bold flavor of our premium coffee
            powder, meticulously crafted to perfection. Each sip delivers an
            unparalleled experience, awakening your senses to a world of pure
            delight. Elevate your mornings with our signature blend, a testament
            to our passion for exceptional coffee.
          </p>
          <button
            onClick={() => {
              router.push("/shop");
            }}
            className="w-1/2  sm:w-1/3 md:w-1/4 lg:w-1/5 h-10 sm:ms-8 text-md lg:text-lg text-card border-2 border-card bg-secondary rounded-lg mb-3 hover:bg-sub"
          >
            Shop Now
          </button>
        </span>
        <Image
          src="/bag.jpg"
          className="bg-cover w-pow2 md:w-pow3 xl:w-pow  lg:mt-10 xl:me-20  xl:ms-10 mt-10 mb-10 sm:me-8 lg:ms-10"
          alt="coffee powder bag"
          width={300}
          height={300}
        />
      </section>
      {/* w-pow2 lg:w-pow */}
      {/* 480 */}
    </div>
  );
};

export default Services;
