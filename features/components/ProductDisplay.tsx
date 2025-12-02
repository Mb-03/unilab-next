"use client";

import { useQuery } from "@tanstack/react-query";
import { getFilterProducts } from "../api/api";
import { useFavourite } from "../context/FavouriteContext";
import { FaHeart, FaStar } from "react-icons/fa";
import ProductSkeletonGrid from "./ProductDisplaySkeleton";

const ProductDisplay = () => {
  const { favourite, toggleFavourite } = useFavourite();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["initial"],
    queryFn: getFilterProducts,
  });

  const totalStars = 5;

  return (
    <div className="grid grid-cols-3 gap-x-[20px] gap-y-[32px]">
      {isLoading && <ProductSkeletonGrid />}
      {products.map((prodcut) => {
        const rating = Math.ceil(Number(prodcut.reviews));
        return (
          <div
            key={prodcut.id}
            className="shadow-[0_0_12px_0_rgba(0,0,0,0.1)] rounded-lg"
          >
            <img src="/top100Img.svg" alt="shopping dress" />
            <div className="flex justify-between p-5 items-center">
              <div className="flex flex-col">
                <h4 className="text-[#262626] text-sm font-[latoBold]">
                  {prodcut.brand}
                </h4>
                <p className="text-[#555555] text-[10px] font-[latoRegular]">
                  {prodcut.title}
                </p>
              </div>
              <FaHeart
                className={`hover:text-red-500 cursor-pointer ${
                  favourite.includes(prodcut.id)
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
                onClick={() => toggleFavourite(prodcut.id)}
              />
            </div>
            <div className="flex px-5">
              {Array.from({ length: totalStars }, (_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
              <p className="text-[#555555] text-[12px] ml-3">
                ({prodcut.reviews})
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3 px-5 pb-5">
              <span className="text-red-500 font-bold text-lg">
                ${prodcut.price}
              </span>
              <span className="text-gray-400">${prodcut.oldPrice}</span>
              <span className=" text-red-500 text-xs">
                -{prodcut.discountPercent}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDisplay;
