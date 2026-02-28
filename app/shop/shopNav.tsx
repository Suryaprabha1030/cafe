"use client";
import React, { useState } from "react";

import Image from "next/image";
import {
  HiHeart,
  HiHome,
  HiOutlineShoppingCart,
  HiShoppingBag,
  HiShoppingCart,
} from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import { useWishlist } from "./wishlistContext";
import { FaCartShopping } from "react-icons/fa6";

const ShopNav = ({ setOpenCart }: any) => {
  const router = useRouter();
  const { wishlist, cart } = useWishlist();
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const isCartPage = pathname === "/shop";
  const iswishPage = pathname === "/wishlist";
  return (
    <div className="w-full  flex flex-row items-center max-sm:justify-between sm:justify-center bg-red-200 fixed top-0  z-20">
      <div className="w-full  flex flex-row md:flex-row max-sm:justify-between  justify-between md:px-20 sm:px-10 max-sm:px-5 items-center    md:bg-primary bg-sub">
        <div className="flex flex-row justify-center items-center gap-2 h-full ">
          <Image
            className="pb-2 pt-3 ps-2 lg:p-0 md:pb-0 md:pt-1 md:ps-0"
            src="/logo gold.png"
            alt="coffee"
            width="70"
            height="50"
          />
          <h1 className="w-full text-logo  max-sm:hidden sm:max-md:hidden text-5xl md:text-2xl lg:text-3xl   xl:text-4xl font-bold font-logo text-center  xl:text-center ">
            DARK CAFE
          </h1>
        </div>

        <ul className="flex  gap-5 md:static   ">
          <button
            onClick={() => {
              setActive(!active);
              router.push("/");
            }}
            className="transition-transform duration-200 hover:scale-110 relative"
          >
            <HiHome
              size={36}
              // color="#FFD700"
              className={`transition-a max-sm:w-[2rem]  text-secondary active:text-card  duration-300 text-text`}
            />

            {/* optional subtle pulse ring */}
          </button>
          <button
            onClick={() => router.push("/shop")}
            className="transition-transform duration-200 hover:scale-110 relative"
          >
            <HiShoppingBag
              size={36}
              className={`transition-a max-sm:w-[2rem]  ${isCartPage ? "text-card" : "text-secondary"}  duration-300 text-text`}
            />

            {/* optional subtle pulse ring */}
          </button>
          <button
            onClick={() => router.push("/wishlist")}
            className="transition-transform duration-200 hover:scale-110 relative"
          >
            <HiHeart
              size={36}
              className={`transition-all max-sm:w-[2rem]  ${iswishPage ? "text-card" : "text-secondary"} = duration-300 text-text`}
            />

            {/* optional subtle pulse ring */}
            {wishlist.length > 0 && (
              <span className="absolute -top-[0.5rem] -right-2 rounded-full  bg-red-500 rounded-full px-2  animate-pingOnce">
                {wishlist.length}
              </span>
            )}
          </button>
          <button className="relative">
            {/* <Image
              // className="relative"
              src="/cart.png"
              alt="coffee"
              width="40"
              height="40"
              onClick={() => setOpenCart(true)}
              className={`transition-all max-sm:w-[2rem] relative duration-300 text-text`}
            /> */}
            <HiOutlineShoppingCart
              size={36}
              onClick={() => setOpenCart(true)}
              className={`transition-all max-sm:w-[2rem]  text-secondary active:text-card duration-300 text-text`}
            />
            {/* <FaCartShopping
              size={36}
              color="#FFD700"
              onClick={() => setOpenCart(true)}
            /> */}

            {cart.length > 0 && (
              <span className="absolute -top-[0.5rem] -right-2 rounded-full bg-red-500 rounded-full px-2  animate-pingOnce">
                {cart.length}
              </span>
            )}
          </button>
          {/* <img className="" src={cart} alt='coffee' width="40" height="40"/> */}
        </ul>
      </div>
    </div>
  );
};

export default ShopNav;
