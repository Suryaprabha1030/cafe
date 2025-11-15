"use client";
import React, { useState } from "react";
import ShopNav from "../shop/shopNav";
import { useWishlist } from "../shop/wishlistContext";
import ShopCard from "../shop/ShopCard";

const Page = () => {
  const { wishlist } = useWishlist();
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ShopNav setOpenCart={setOpenCart} />
      <div className="w-full bg-white grid grid-cols-5 gap-1  px-10 place-items-center py-10">
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
    </div>
  );
};

export default Page;
