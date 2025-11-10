"use client";
import React, { useEffect, useState } from "react";

import { HiHeart } from "react-icons/hi";
import { useWishlist } from "./wishlistContext";
// or use react-icons if you prefer

const AnimatedWishlistButton = ({ item }: any) => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { toggleWishlist, isInWishlist } = useWishlist();

  // useEffect(() => {
  //   setLiked(true);
  //   isInWishlist(item.id);
  // }, [isInWishlist]);
  // const handleClick = () => {
  //   setLiked(!liked);
  //   setAnimate(true);
  //   toggleWishlist(item);

  //   // remove animation class after it runs
  //   setTimeout(() => setAnimate(false), 400);
  // };
  useEffect(() => {
    setLiked(isInWishlist(item.id));
  }, [isInWishlist, item.id]);

  const handleClick = () => {
    toggleWishlist(item);
    setLiked((prev) => !prev);
    setAnimate(true);

    // remove animation class after it runs
    setTimeout(() => setAnimate(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className="transition-transform duration-200 hover:scale-110 relative"
    >
      <HiHeart
        size={36}
        className={`transition-all duration-300 ${
          liked ? "fill-red-500 text-red-500" : "text-white"
        } ${animate ? "scale-125 animate-pingOnce" : ""}`}
      />

      {/* optional subtle pulse ring */}
      {/* {liked && (
        <span className="absolute inset-0 rounded-full bg-red-400/30 animate-pingOnce"></span>
      )} */}
    </button>
  );
};

export default AnimatedWishlistButton;
