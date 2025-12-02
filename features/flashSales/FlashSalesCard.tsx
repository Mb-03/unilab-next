"use client";

import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getFlashSales } from "../api/api";
import { Product } from "../types/FlashSaleType";
import { FlashSaleCardSkeleton } from "./FlashSaleCardSkeleton";

const FlashSalesCard = () => {
  const {
    data: cards,
    isLoading,
    
  } = useQuery<Product[]>({
    queryKey: ["flashSales"],
    queryFn: getFlashSales,
  });

  const validCards = cards?.filter(
    (card) =>
      card.id &&
      card.title &&
      card.description &&
      card.reviews &&
      card.numberOfReviews &&
      card.discountedPrice &&
      card.originalPrice &&
      card.discountPercent
  );

  const topFour = validCards?.slice(0, 4);
  const totalStars = 5;

  return (
    <div className="flex mx-auto max-w-[1440px] gap-5 px-[90px] flex-wrap">
      {isLoading ? (
        <div className="flex gap-20 justify-between">
          <FlashSaleCardSkeleton />
          <FlashSaleCardSkeleton />
          <FlashSaleCardSkeleton />
          <FlashSaleCardSkeleton />
        </div>
      ) : (
        topFour?.map((card) => {
          const rating = Math.ceil(Number(card.reviews));
          return (
            <div
              key={card.id}
              className="flex flex-col px-[74px] shadow-[0_0_12px_0_rgba(0,0,0,0.1)] rounded-lg py-4 max-w-[300px]"
            >
              <span className="text-[#9D9D9D] font-[latoBold] text-center">
                Deal of the Day
              </span>
              
              <img
                src="/flashSalesImg.svg"
                alt="bag"
                className="max-w-40 max-h-28 object-contain mt-4 self-center"
              />
              <h4 className="text-[#262626] font-[latoBold] text-[16px]  mt-4 font-extrabold">
                {card.title}
              </h4>
              <p className="font-[latoRegular] text-[#555555] ">
                {card.description}
              </p>

              <div className="flex items-center gap-1 mt-2 text-sm justify-start">
                <div className="flex gap-1 ">
                  {Array.from({ length: totalStars }, (_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-[#555555]">({card.numberOfReviews})</span>
              </div>

              <div className="flex items-center gap-3 mt-3 ">
                <span className="text-red-500 font-bold text-lg">
                  ${card.discountedPrice}
                </span>
                <span className="text-gray-400">${card.originalPrice}</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{card.discountPercent}%
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FlashSalesCard;
