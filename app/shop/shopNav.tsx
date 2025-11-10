"use client";
import React, { useState } from "react";

import Image from "next/image";
import { HiHeart } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useWishlist } from "./wishlistContext";

const ShopNav = ({ setOpenCart }: any) => {
  const router = useRouter();
  const { wishlist, cart } = useWishlist();
  return (
    <div className="w-full  flex flex-row items-center justify-center fixed top-0  z-20">
      <div className="w-full container  flex flex-row md:flex-row  justify-between px-20 items-center    md:bg-primary bg-sub">
        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            className="pb-2 pt-3 ps-2 md:pb-0 md:pt-1 md:ps-0"
            src="/logo gold.png"
            alt="coffee"
            width="70"
            height="50"
          />
          <h1 className="w-full text-logo text-5xl md:text-2xl lg:text-7xl  xl:text-4xl font-bold font-logo text-center  xl:text-center ">
            DARK CAFE
          </h1>
        </div>

        <ul className="flex  gap-5 md:static absolute right-20 top-7  ">
          <button
            onClick={() => router.push("/wishlist")}
            className="transition-transform duration-200 hover:scale-110 relative"
          >
            <HiHeart
              size={36}
              className={`transition-all duration-300 text-text`}
            />

            {/* optional subtle pulse ring */}
            {wishlist.length > 0 && (
              <span className="absolute -top-[0.5rem] -right-2 rounded-full bg-red-500 rounded-full px-2  animate-pingOnce">
                {wishlist.length}
              </span>
            )}
          </button>
          <button className="relative">
            <Image
              className="relative"
              src="/cart.png"
              alt="coffee"
              width="40"
              height="40"
              onClick={() => setOpenCart(true)}
            />

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
