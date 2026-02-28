"use client";
import React, { useState } from "react";
import ShopNav from "../shop/shopNav";
import { useWishlist } from "../shop/wishlistContext";
import ShopCard from "../shop/ShopCard";
import UserCart from "../shop/UserCart";

const Page = () => {
  const { wishlist } = useWishlist();
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ShopNav setOpenCart={setOpenCart} />
      {wishlist.length > 0 ? (
        <div className="w-full bg-white grid grid-cols-5 gap-1  max-sm:gap-1 max-sm:grid-cols-1 lg:max-2xl:grid-cols-4 justify-center items-center  md:max-lg:grid-cols-3  sm:max-md:grid-cols-2  px-10 place-items-center py-10">
          {wishlist.map((prod) => (
            <ShopCard
              name={prod.name}
              about={prod.description}
              type={prod.category}
              prdtImage={prod.image}
              key={prod.id}
              keyData={prod.id}
              item={prod}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center text-xl xl:text-2xl text-black">
          Add Your Favorite&apos;s
        </div>
      )}
      {openCart && <UserCart setOpenCart={setOpenCart} />}
    </div>
  );
};

export default Page;
