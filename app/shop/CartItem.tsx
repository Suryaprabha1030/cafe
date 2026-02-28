"use client";
import React from "react";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { useWishlist } from "./wishlistContext";

type AddCart = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity?: number;
};

interface AddCartProps {
  item: AddCart;
}

const CartItem: React.FC<AddCartProps> = ({ item }) => {
  const { decreaseQty, increaseQty, getItemQty, removeFromCart } =
    useWishlist();
  return (
    <div className="flex relative items-center justify-between bg-gradient-to-from-white to-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 w-full group">
      {/* Product Image */}
      <div className="flex items-center w-full gap-4">
        <div className="w-24 h-24 rounded-xl overflow-hidden border border-gray-200 cursore-pointer shadow-sm">
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="object-cover w-full h-full transition-transform duration-500 "
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-1 w-[90%]">
          <h2 className="text-md font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300">
            {item.name}
          </h2>
          <p className="text-xs text-gray-500 line-clamp-2 max-w-xs">
            {item.description}
          </p>
          <div className="flex flex-row w-full justify-between items-center px-2 pt-2 ">
            <span className="text-md font-bold text-secondary ">
              ₹ {item.price}
            </span>
            <div className="flex flex-col items-center gap-3 h-5">
              {/* Quantity Controls */}
              <div className="flex items-center text-md bg-gray-100 rounded-md overflow-hidden border border-gray-300 shadow-inner">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 text-gray-600 hover:bg-gray-200 transition-all font-semibold "
                >
                  −
                </button>
                <span className="px-2 text-gray-800 text-[0.65rem] font-medium select-none bg-white">
                  {getItemQty(item.id) || 1}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2  text-gray-600 hover:bg-gray-200 transition-all font-semibold "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantity + Remove */}

        {/* Remove button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 rounded-full absolute top-0 right-0 bg-gray-100 hover:bg-red-100 text-red-500 transition-all hover:scale-110"
          title="Remove from cart"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
