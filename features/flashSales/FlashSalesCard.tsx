"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getFlashSales } from "../api/api";
import { Product } from "../types/FlashSaleType";
import { FlashSaleCardSkeleton } from "./FlashSaleCardSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import CountdownTimer from "../components/CountdownTimer";

const FlashSalesCard = () => {
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
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = ({ card }: { card: Product }) => {
    const rating = Math.ceil(Number(card.reviews));
    return (
      <div className="flex flex-col px-[74px] shadow-[0_0_12px_0_rgba(0,0,0,0.1)] rounded-lg py-4 max-w-[300px] max-xl:min-w-[400px] max-xl:flex-1 max-xl:px-[47px]">
        <span className="text-[#9D9D9D] font-[latoBold] text-center">
          Deal of the Day
        </span>
        <div className="self-center font-[latoBold]">
          <CountdownTimer
            initialSeconds={
              Math.floor(Math.random() * (86400 - 7200 + 1)) + 7200
            }
          />
        </div>
        <img
          src="/flashSalesImg.svg"
          alt="bag"
          className="max-w-40 max-h-28 object-contain mt-4 self-center"
        />
        <div className="max-xl:flex max-xl:justify-between max-xl:flex-col">
          <div className="max-xl:flex max-xl:items-center max-xl:justify-between max-xl:mt-[41px]">
            <h4 className="text-[#262626] font-[latoBold] text-[16px] mt-4 max-xl:mt-0 font-extrabold">
              {card.title}
            </h4>
            <p className="font-[latoRegular] text-[#555555] text-[12px] ">
              {card.description}
            </p>
          </div>

          <div className="max-xl:flex max-xl:justify-between">
            <div className="flex items-center gap-1 mt-2 text-sm justify-start ">
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
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex gap-5 flex-wrap max-md:justify-start">
        <FlashSaleCardSkeleton />
        <FlashSaleCardSkeleton />
        <FlashSaleCardSkeleton />
        <FlashSaleCardSkeleton />
      </div>
    );
  }

  return (
    <div className="flex mx-auto max-w-[1440px] gap-5 px-[90px] flex-wrap max-xl:justify-between max-md:px-5">
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
          centeredSlides={false}
        >
          {topFour?.map((card) => (
            <SwiperSlide key={card.id} style={{ width: "400px" }}>
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

export default FlashSalesCard;
