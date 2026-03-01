import React from "react";
import CartItem from "./CartItem";
import { useWishlist } from "./wishlistContext";
import { BiShoppingBag } from "react-icons/bi";
import { IoBagRemove, IoClose, IoRemove } from "react-icons/io5";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const UserCart = ({ setOpenCart }: any) => {
  const { cart } = useWishlist();
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 h-full max-sm:w-full w-[30rem] bg-white shadow-xl z-50 ">
      <div className="flex flex-row justify-between gap-2 w-full px-3 py-5 sticky top-0 z-[20] bg-white">
        <div className="text-black flex flex-row items-center gap-2">
          <BiShoppingBag className="text-logo w-[1.5rem] h-[1.5rem]" />
          <span className="text-xl">Shopping Cart ({cart.length})</span>
        </div>
        <IoClose
          className="text-black w-[1.5rem] h-[1.5rem]"
          onClick={() => setOpenCart(false)}
        />
      </div>
      <div className="overflow-y-auto h-screen px-5 py-6 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <div className="text-center text-gray-500 mt-10">
            Your cart is empty{" "}
            {/* <BiShoppingBag className="text-logo w-[1.5rem] h-[1.5rem]" /> */}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div
          className="sticky bottom-0 bg-white px-5 py-4 border-t shadow-inner"
          onClick={() => router.push("/checkout")}
        >
          <button className="w-full py-3 bg-sub text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCart;
