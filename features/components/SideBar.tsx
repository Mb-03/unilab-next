"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "../debounce/UseDebounce";
import { useFilters } from "../context/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { ProductCard, sideBarHelperFetch } from "../api/api";
import { extractUniqueFilters } from "../utils/extractFilters";
import { useFilterToggle } from "../context/FilterToggleContext";
import PriceSlider from "./PriceSlider";

const SideBar = () => {
  const [localBrand, setLocalBrand] = useState("");
  const debouncedBrand = useDebounce(localBrand, 300);

  const {
    setBrand,
    color,
    model,
    setModel,
    size,
    toggleSize,
    style,
    toggleStyle,
    toggleColor,
  } = useFilters();

  useEffect(() => {
    setBrand(debouncedBrand);
  }, [debouncedBrand, setBrand]);

  const { data: filters = [] } = useQuery({
    queryKey: ["helper"],
    queryFn: sideBarHelperFetch,
  });

  const { colors, models, sizes, styles } = extractUniqueFilters(filters);

  const { isOpen } = useFilterToggle();

  return (
    <div
      className={`font-[latoRegular]  items-center py-[18px] max-md:left-0  max-md:top-0 max-md:absolute max-md:max-w-[300px] max-md:min-h-screen max-md:z-50 max-md:shadow-[5px_0px_14px_0px_rgba(0,0,0,0.16)] bg-white ${
        isOpen ? "max-md:block" : "max-md:hidden"
      } hidden md:block`}
    >
      <div className="flex gap-4 mb-5 px-[26px] ">
        <img
          src="/sideBarCategories.svg"
          alt="categories icon"
          className="w-4 h-4"
        />
        <h4 className="font-[latoBold]">All Categories</h4>
      </div>
      <div className="flex flex-col gap-3 relative  px-[26px]">
        <h3>BRAND</h3>

        <input
          value={localBrand}
          onChange={(e) => setLocalBrand(e.target.value)}
          placeholder="Search"
          type="text"
          className="border border-[#D9D9D9] rounded-sm px-4 py-2 w-full "
        />

        <img
          src="/Search.svg"
          alt="Search icon "
          className=" absolute right-[30px] bottom-[-8px] px-3 transform translate-y-[-100%]"
        />
      </div>
      <div className="flex flex-col mt-[28px] border-t border-[#D9D9D9] pt-[28px] px-[26px]">
        <h3 className="mb-6">MODEL</h3>
        <div className="flex flex-col gap-5">
          <div className="border-b border-[#D9D9D9] space-y-5 pb-1">
            {models.map((m) => {
              const selected = model === m;
              return (
                <div
                  className="cursor-pointer"
                  onClick={() => setModel(selected ? null : m)}
                  key={m}
                >
                  {m}
                </div>
              );
            })}
          </div>
          <div className="border-b border-[#D9D9D9] space-y-5 pb-1">
            <h3>STYLE</h3>
            {styles.map((s) => {
              const selected = style.includes(s);

              return (
                <label
                  key={s}
                  className="flex items-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleStyle(s)}
                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                  />
                  <span className="text-sm">{s}</span>
                </label>
              );
            })}
          </div>
          <div className="border-b border-[#D9D9D9] space-y-5 pb-1 ">
            <h3>COLOR</h3>
            <div className="flex gap-3 pb-7">
              {colors.map((c) => {
                const selected = color.includes(c);
                return (
                  <div
                    onClick={() => toggleColor(c)}
                    className={`w-6 h-6 rounded-full border cursor-pointer flex items-center justify-center ${
                      selected && "text-yellow-500 font-[latoBold]"
                    } `}
                    title={c}
                    style={{ backgroundColor: c }}
                  >
                    {selected && "✔"}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-b border-[#D9D9D9] space-y-5 pb-7">
            <h3>Size</h3>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((s) => {
                const selected = size.includes(s);
                return (
                  <div
                    onClick={() => toggleSize(s)}
                    key={s}
                    className={`py-[5px] cursor-pointer px-3 border min-w-[50px] text-center rounded-[5px] ${
                      selected && "bg-[#D1E2EB]"
                    }`}
                  >
                    {s}
                  </div>
                );
              })}
            </div>
          </div>
          <PriceSlider />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
