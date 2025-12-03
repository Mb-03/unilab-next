"use client";

import { createContext, useContext, useState } from "react";

type FilterContextType = {
  brand: string;
  setBrand: (brand: string) => void;
  model: string | null;
  style: string[];
  color: string[];
  size: string[];

  setModel: (model: string | null) => void;
  toggleStyle: (style: string) => void;
  toggleColor: (color: string) => void;
  toggleSize: (size: string) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState<string | null>(null);
  const [style, setStyles] = useState<string[]>([]);
  const [color, setColors] = useState<string[]>([]);
  const [size, setSizes] = useState<string[]>([]);

  const toggleStyle = (value: string) =>
    setStyles((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );

  const toggleColor = (value: string) =>
    setColors((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );

  const toggleSize = (value: string) =>
    setSizes((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );

  return (
    <FilterContext.Provider
      value={{
        brand,
        setBrand,
        model,
        setModel,
        style,
        toggleStyle,
        toggleColor,
        color,
        toggleSize,
        size,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilters must be used inside <FilterProvider>");
  return ctx;
};
