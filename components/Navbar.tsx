import React, { useState } from "react";

import Image from "next/image";

import { useEffect } from "react";

function NavLink({ href, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === href);
    };

    // Check initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [href]);

  return (
    <a href={href}>
      <li
        className={`text-lg md:text-xl font-bold transition-colors duration-200 ${
          isActive
            ? "text-primary md:text-card"
            : "text-card md:text-secondary hover:text-primary  hover:md:text-card"
        }`}
      >
        {children}
      </li>
    </a>
  );
}

const Navbar = () => {
  const [show, setShow] = useState(false);
  const open = () => {
    setShow(!show);
  };
  return (
    <div className="w-full  flex flex-row items-center justify-center fixed top-0  z-20">
      <div className="max-w-full container mx-auto flex flex-row md:flex-row  justify-between md:justify-around items-center    md:bg-primary bg-sub">
        <Image
          className="pb-2 pt-3 ps-2 md:pb-0 md:pt-1 md:ps-0 "
          src="/logo gold.png"
          alt="coffee"
          width="70"
          height="50"
        />
        <Image
          className={`md:hidden absolute right-4 top-7 ${show ? "max-sm:w-[1.5rem] sm:max-md:w-[1.7rem]" : "max-sm:w-[2rem] sm:max-md:w-[1.8rem]"} `}
          src={show ? "/close.png" : "/menu.png"}
          alt="menu"
          width="40"
          height="40"
          onClick={open}
        />
        <ul
          className={`w-full max-sm:py-5 md:w-auto max-sm flex flex-col border-t-2 border-secondary md:border-t-0  md:flex-row items-center pl-9  md:mt-0 sm:pb-5 md:pl-0 md:pb-0 md:justify-around gap-7 absolute  md:static bg-sub md:bg-primary md:z-auto z-9  ${
            show ? "top-20" : "top-[-490px]"
          }`}
        >
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services"> Services</NavLink>
          <NavLink href="#reserve"> Reserve</NavLink>
          {/* <li className='text-card md:text-secondary text-lg md:text-xl font-bold'>Order</li> */}
        </ul>
        <ul className="flex  gap-2 md:static absolute right-20 top-7  hidden">
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
