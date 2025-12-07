"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../types/FlashSaleType";

type CardContext = {
  item: string[];
  toggleItem: (id: string) => void;
};

type CardProps = { children: ReactNode };

const CartContext = createContext<CardContext | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("invalid CartContext Usage");

  return context;
};

export const CartContextProvider = ({ children }: CardProps) => {
  const [item, setItem] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedItem = localStorage.getItem("Cart");
    if (storedItem) setItem(JSON.parse(storedItem));
    setMounted(true);
  }, []);

  const toggleItem = (id: string) => {
    setItem((prev) =>
      prev.includes(id) ? prev.filter((cartId) => cartId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("Cart", JSON.stringify(item));
  }, [item]);

  return (
    <CartContext.Provider value={{ item, toggleItem }}>
      {children}
    </CartContext.Provider>
  );
};
