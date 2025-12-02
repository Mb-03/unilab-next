"use client";

import ProductDisplay from "@/features/components/ProductDisplay";
import SideBar from "@/features/components/SideBar";
import { usePathname } from "next/navigation";

const Woman = () => {
  const pathname = usePathname();

  return (
    <div className="w-full  ">
      <div className="bg-[#E9E9E9]">
        <div className=" font-[latoRegular]  max-w-[1440px] flex justify-between mx-auto px-[90px] mt-[84px] mb-[48px] items-center py-[34.5px] relative">
          <div className="absolute top-[-50%] flex gap-4 items-center">
            <span>Homepage</span>
            <img src="./rightArrow.svg" alt="down arrow" className="w-4 h-4" />
            <span>
              {pathname.slice(1, 2).charAt(0).toUpperCase()}
              {pathname.slice(2)}
            </span>
            <img src="./rightArrow.svg" alt="down arrow" className="w-4 h-4" />
            <span>Clothes</span>
          </div>
          <div className="flex gap-8 items-center">
            <h2 className="text-[#262626] text-[20px] font-[latoBold]">
              {pathname.slice(1, 2).charAt(0).toUpperCase()}
              {pathname.slice(2)}
            </h2>
            <p className="text-[#555555] text-[16px]">Lenght items</p>
          </div>

          <div className="flex items-center gap-1 border p-[10px] rounded-sm border-[#7B7B7B]">
            <button className="text-[#555555] ">Sort by order</button>
            <img src="./Arrow.svg" alt="down arrow" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-[90px] flex justify-between">
        <div className="  pr-8 py-9">
          <SideBar />
        </div>
        <div className="  py-20 pl-22">
          <ProductDisplay />
        </div>
      </div>
    </div>
  );
};

export default Woman;
