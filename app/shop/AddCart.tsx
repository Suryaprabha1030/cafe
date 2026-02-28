import Image from "next/image";
import React from "react";
import { useWishlist } from "./wishlistContext";

interface AddCartProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity?: number;
}

const AddCart: React.FC<AddCartProps> = (item) => {
  const { addToCart } = useWishlist();
  return (
    <span className="flex flex-row justify-between items-center text-[0.8rem]">
      <p> ₹ {item.price}</p>
      <button
        className="bg-sub text-logo py-1 active:scale-105  flex flex-row gap-2 rounded-md px-2 items-center justify-center cursore-pointer "
        onClick={() => addToCart(item)}
      >
        {" "}
        <Image
          className="w-[1rem] h-[1rem]"
          src="/cart.png"
          alt="coffee"
          width="20"
          height="20"
        />
        <span className="text-[0.85rem]">Add to cart</span>
      </button>
    </span>
  );
};

export default AddCart;
