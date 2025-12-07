"use client";

import { getImageDetails, ProductCard } from "@/features/api/api";
import AlsoLike from "@/features/components/AlsoLike";
import DetailsPageDetails from "@/features/components/DetailsPageDetails";
import { useCartContext } from "@/features/context/CartContext";
import { useFavourite } from "@/features/context/FavouriteContext";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowRight, FaHeart, FaMinus, FaPlus } from "react-icons/fa";

const images = [
  { id: 1, selected: false, src: "/top100Img.svg" },
  { id: 2, selected: false, src: "/top100Img.svg" },
  { id: 3, selected: false, src: "/top100Img.svg" },
  { id: 4, selected: false, src: "/top100Img.svg" },
  { id: 5, selected: true, src: "/top100Img.svg" },
];

const selectedImage = images.find((img) => img.selected === true);

const Details = () => {
  const [count, setCount] = useState(1);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];

  const { data } = useQuery<ProductCard>({
    queryKey: ["details", id],
    queryFn: () => getImageDetails(id),
  });

  const { favourite, toggleFavourite } = useFavourite();
  const { toggleItem } = useCartContext();

  return (
    <div className="max-w-[1440px] mx-auto px-[90px] py-6 flex gap-15 flex-col max-md:px-0">
      <div className="flex gap-15 justify-between max-md:flex-col">
        <div>
          <span className="flex items-center gap-1 py-6 max-md:hidden">
            Homepage <FaArrowRight /> Women <FaArrowRight /> CLothes
            <FaArrowRight /> Zara
          </span>
          <div className="flex gap-1 max-md:flex-col">
            <div className="relative">
              <img
                src={selectedImage ? selectedImage.src : "/top100Img.svg"}
                alt="shopping dress"
                className="min-h-full object-cover min-w-[500px] max-lg:min-w-[280px] md:hidden max-md:min-w-full"
              />
              <FaHeart
                size={60}
                // @ts-expect-error
                onClick={() => toggleFavourite(data?.id)}
                className={`${
                  // @ts-expect-error
                  favourite.includes(data?.id)
                    ? "text-red-500"
                    : "text-[#D9DADB]"
                } cursor-pointer border border-[#D9DADB] rounded-[50%] px-3 py-3 md:hidden absolute top-5 right-5`}
              />
            </div>
            <div className="max-md:flex max-md:gap-1 max-md:px-5">
              {images.map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  className="max-w-[120px] max-h-[120px] object-contain max-md:max-w-[84.4px] max-md:overflow-auto"
                />
              ))}
            </div>
            <div>
              <img
                src={selectedImage ? selectedImage.src : "/top100Img.svg"}
                alt="shopping dress"
                className="min-h-full object-cover min-w-[500px] max-lg:min-w-[280px] max-md:hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[96px] font-[latoRegular] flex-1 text-[#262626] max-lg:max-w-[400px] max-md:px-5">
          <div className="flex justify-between mb-8 ">
            <div>
              <h4 className="text-[#262626] font-[latoBold] text-[22px]">
                {data?.title}
              </h4>
              <p>${data?.price}</p>
            </div>
            <FaHeart
              size={60}
              // @ts-expect-error
              onClick={() => toggleFavourite(data?.id)}
              className={`${
                // @ts-expect-error
                favourite.includes(data?.id) ? "text-red-500" : "text-[#D9DADB]"
              } cursor-pointer border border-[#D9DADB] rounded-[50%] px-3 py-3 max-md:hidden`}
            />
          </div>
          <div className="flex gap-4 mb-13">
            <p>Size</p>
            <div className="flex gap-3 flex-wrap ml-8">
              {data?.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-sm border border-[#C4C4C4] px-4 py-1"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mb-5">
            <p>Color</p>
            <div className="ml-5 flex gap-1">
              {data?.colors.map((color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border cursor-pointer flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center mb-5">
            <p>Shipping</p>
            <div>
              <p>Free Shipping to Victoria teritory</p>
              <p className="text-[#9D9D9D]">Delivery time 14-17 days</p>
            </div>
          </div>
          <div className="flex gap-4">
            <p>Quantity</p>

            <div className="flex rounded-sm border border-[#C4C4C4] px-4 py 2.5 items-center gap-2.5">
              <FaMinus
                onClick={() =>
                  setCount((prev) => (prev !== 0 ? prev - 1 : prev))
                }
              />
              {count}
              <FaPlus onClick={() => setCount((prev) => prev + 1)} />
            </div>
            <p>50 availabe / 104 sold</p>
          </div>
          <div className="max-md:hidden">
            <div className="bg-[#E9E9E9] py-3 px-6 mt-8 max-lg:max-w-[345px]">
              <span className="font-[latoBold] border-b border-[#C4C4C4] flex pb-2">
                $79.98
              </span>
              <span className="pt-2 flex gap-[5px] text-[12px] items-center">
                <FaPlus
                  className="bg-[#C4C4C4] rounded-lg p-1 text-white"
                  size={20}
                />
                Add shipping insurance for $9( declared value only if the
                package gets lost, stolen or damaged.)
              </span>
            </div>
            <div className="flex gap-5 mt-8 justify-between max-lg:max-w-[345px]">
              <button className="uppercase bg-[#4172DC] text-white px-8 py-4 rounded-sm min-w-[275px] max-lg:min-w-0 text-sm max-lg:px-4">
                Shop Now
              </button>
              <button
                className="flex items-center uppercase px-8 py-4 text-black border border-[#434343] rounded-sm gap-2 min-w-[275px] justify-center max-lg:min-w-0 text-sm max-lg:px-4"
                // @ts-expect-error
                onClick={() => toggleItem(data?.id)}
              >
                <img src="/addToCard.svg" alt="add to cart icon" />
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DetailsPageDetails />
        
        <AlsoLike />
      </div>
    </div>
  );
};

export default Details;
