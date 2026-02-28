import Image from "next/image";
import React from "react";
import AnimatedWishlistButton from "./wishlistButton";
import AddCart from "./AddCart";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity?: number;
};

type ShopCardProps = {
  name: string;

  about: string;
  type: string;
  prdtImage: string;
  keyData: number;

  item: WishlistItem;
};

const ShopCard = ({
  name,
  about,
  type,
  prdtImage,
  keyData,
  item,
}: ShopCardProps) => {
  return (
    <div className="flex flex-col  mt-20  relative bg-white border border-gray-300 rounded-lg shadow-2xl md:max-lg:w-[12rem] lg:max-xl:w-[13rem]  w-[15rem] h-[25rem]">
      <Image
        className="rounded-t-lg w-full  h-[15rem]"
        src={prdtImage}
        alt="cofee"
        width={50}
        height={50}
      />
      <h2 className="text-secondary text-[0.75rem] px-2 py-1">{type}</h2>
      <div className="text-black flex flex-col justify-between gap-6 px-2 py-2">
        <span className="text-black flex flex-col gap-[0.4rem]">
          <h2 className="text-[1rem] font-[440]">{name}</h2>
          <h3 className="text-[0.75rem] font-[400]">{about}</h3>
        </span>
        <AddCart {...item} />
      </div>
      <div className="absolute top-2 right-2">
        <AnimatedWishlistButton item={item} />
      </div>
    </div>
  );
};

export default ShopCard;
