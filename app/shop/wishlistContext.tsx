"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type WishlistContextType = {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
  cart: WishlistItem[];
  addToCart: (item: WishlistItem) => void;
  isInCart: (id: number) => boolean;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQty: (id: number) => number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

// type WishlistItem = {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// };

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  quantity?: number;
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [cart, setCart] = useState<WishlistItem[]>([]);
  const toggleWishlist = (item: any) => {
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id == item.id);
      if (exists) {
        return prev.filter((i) => i.id != item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const addToCart = (item: Omit<WishlistItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity ? i.quantity + 1 : 1 }
            : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity && i.quantity + 1 } : i
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id
            ? { ...i, quantity: i.quantity && Math.max(i.quantity - 1, 1) }
            : i
        )
        .filter((i) => i.quantity && i.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const getItemQty = (id: number): number => {
    const found = cart.find((i) => i.id === id);
    return found?.quantity ?? 0;
  };

  const isInWishlist = (id: number) => wishlist.some((i) => i.id === id);
  const isInCart = (id: number) => cart.some((i) => i.id === id);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        cart,
        addToCart,
        isInCart,
        decreaseQty,
        increaseQty,
        getItemQty,
        removeFromCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
};
