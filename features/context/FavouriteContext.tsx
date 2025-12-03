"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FavouriteContextType = {
  favourite: string[];
  toggleFavourite: (id: string) => void;
};

type Props = { children: ReactNode };

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
  if (!context) throw new Error("Invalid Context Usage");

  return context;
};

export const FavouriteProvider = ({ children }: Props) => {
  const [favourite, setFavourite] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) setFavourite(JSON.parse(stored));
    setMounted(true);
  }, []);

  const toggleFavourite = (id: string) => {
    setFavourite((prev) =>
      prev.includes(id) ? prev.filter((faveId) => faveId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourite));
  }, [favourite, mounted]);

  return (
    <FavouriteContext.Provider value={{ favourite, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
