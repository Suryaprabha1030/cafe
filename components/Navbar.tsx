import React, { useState } from "react";

import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const open = () => {
    setShow(!show);
  };
  return (
    <div className="w-full  flex flex-row items-center justify-center fixed top-0  z-20">
      <div className="max-w-full container mx-auto flex flex-row md:flex-row  justify-between md:justify-around items-center    md:bg-primary bg-sub">
        <Image
          className="pb-2 pt-3 ps-2 md:pb-0 md:pt-1 md:ps-0"
          src="/logo gold.png"
          alt="coffee"
          width="70"
          height="50"
        />
        <Image
          className="md:hidden absolute right-4 top-7  "
          src={show ? "/close.png" : "/menu.png"}
          alt="menu"
          width="40"
          height="40"
          onClick={open}
        />
        <ul
          className={`w-full md:w-auto flex flex-col border-t-2 border-secondary md:border-t-0  md:flex-row items-center pl-9  md:mt-0 pb-5 md:pl-0 md:pb-0 md:justify-around gap-7 absolute  md:static bg-sub md:bg-primary md:z-auto z-9  ${
            show ? "top-20" : "top-[-490px]"
          }`}
        >
          <a href="#home">
            <li className=" text-card md:text-secondary text-lg md:text-xl  font-bold">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="text-card md:text-secondary text-lg md:text-xl font-bold">
              About
            </li>
          </a>
          <a href="#services">
            <li className="text-card md:text-secondary text-lg md:text-xl font-bold">
              Services
            </li>
          </a>
          {/* <li className='text-card md:text-secondary text-xl font-bold'>Reservation</li> */}
          <a href="#reserve">
            <li className="text-card md:text-secondary text-lg md:text-xl font-bold">
              Reserve
            </li>
          </a>
          {/* <li className='text-card md:text-secondary text-lg md:text-xl font-bold'>Order</li> */}
        </ul>
        <ul className="flex  gap-2 md:static absolute right-20 top-7  ">
          <Image
            className=""
            src="/user golden.png"
            alt="coffee"
            width="40"
            height="40"
          />
          {/* <img className="" src={cart} alt='coffee' width="40" height="40"/> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
