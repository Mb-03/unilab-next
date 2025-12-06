"use client";

import { createContext, useContext, useState } from "react";

type FilterToggleContextProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const FilterToggleContext = createContext<FilterToggleContextProps | undefined>(
  undefined
);

export const useFilterToggle = () => {
  const context = useContext(FilterToggleContext);
  if (!context) throw new Error("Invalid Context Usage");

  return context;
};

export const FilterToggleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FilterToggleContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </FilterToggleContext.Provider>
  );
};
