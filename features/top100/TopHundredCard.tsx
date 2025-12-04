"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/FlashSaleType";
import { getFlashSales } from "../api/api";
import { FlashSaleCardSkeleton } from "../flashSales/FlashSaleCardSkeleton";
import { FaHeart, FaStar } from "react-icons/fa";
import { useFavourite } from "../context/FavouriteContext";
import { Swiper, SwiperSlide } from "swiper/react";

const TopHundredCard = () => {
  const { favourite, toggleFavourite } = useFavourite();
  const { data: cards, isLoading } = useQuery<Product[]>({
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // max-md
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = ({ card }: { card: Product }) => {
    const rating = Math.ceil(Number(card.reviews));
    return (
      <div className="flex flex-col shadow-[0_0_12px_0_rgba(0,0,0,0.1)] rounded-lg max-w-[300px] max-lg:max-w-[395px]">
        <img src="/top100Img.svg" alt="shopping dress" />
        <div className="p-5 flex justify-between">
          <div>
            <h4 className="text-[#262626] font-[latoBold] text-[16px] mt-4 font-extrabold">
              {card.title}
            </h4>
            <p className="font-[latoRegular] text-[#555555] mt-1">
              {card.description}
            </p>
          </div>
          <FaHeart
            onClick={() => toggleFavourite(card.id)}
            className={`${
              favourite.includes(card.id) ? "text-red-500" : "text-gray-300"
            } cursor-pointer self-center`}
          />
        </div>

        <div className="flex items-center gap-1 text-sm px-5">
          <div className="flex gap-1">
            {Array.from({ length: totalStars }, (_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating
                    ? "text-yellow-400 min-h-6 min-w-6"
                    : "text-gray-300 min-h-6 min-w-6"
                }
              />
            ))}
          </div>
          <span className="text-[#555555]">({card.numberOfReviews})</span>
        </div>

        <div className="flex items-center gap-3 mt-3 px-5 pb-5">
          <span className="text-red-500 font-bold text-lg">
            ${card.discountedPrice}
          </span>
          <span className="text-gray-400">${card.originalPrice}</span>
          <span className="text-red-500 text-xs">-{card.discountPercent}%</span>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex gap-5 flex-wrap max-md:justify-start my-[68px]">
        <FlashSaleCardSkeleton />
        <FlashSaleCardSkeleton />
        <FlashSaleCardSkeleton />
        <FlashSaleCardSkeleton />
      </div>
    );
  }

  return (
    <div className="flex mx-auto max-w-[1440px] gap-5 px-[90px] flex-wrap my-[68px] max-xl:justify-between max-md:px-5">
      {isMobile ? (
        <Swiper spaceBetween={10} slidesPerView={1}>
          {topFour?.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        topFour?.map((card) => <Card key={card.id} card={card} />)
      )}
    </div>
  );
};

export default TopHundredCard;
