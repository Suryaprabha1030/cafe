"use client";

import React, { useState } from "react";
import ShopNav from "./shopNav";
import ShopCard from "./ShopCard";
import { products } from "./Product";
import UserCart from "./UserCart";

const Page = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen overflow-x-hidden relative overflow-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ShopNav setOpenCart={setOpenCart} />
      <div className="w-full bg-white grid grid-cols-5 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:max-2xl:grid-cols-4  max-sm:grid-cols-1 gap-1  px-10 place-items-center py-10">
        {products.map((prod) => (
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
      {openCart && <UserCart setOpenCart={setOpenCart} />}
    </div>
  );
};

export default Page;
