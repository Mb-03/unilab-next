"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const trendingItems = [
  {
    id: 1,
    img: "/trending1.png",
    label: "New Arrivals",
    title: "Cool & Sexy Calvin Klein",
    subtitle: "Dotted dress-Casual",
    price: "$89",
  },
  {
    id: 2,
    img: "/trending2.png",
    label: "",
    title: "Cool & Sexy Calvin Klein",
    subtitle: "Dotted dress-Casual",
    price: "$89",
  },
  {
    id: 3,
    img: "/trending3.png",
    label: "New Arrivals",
    title: "beige coat Zara",
    subtitle: "Dotted dress-Casual",
    price: "$102",
  },
];

const Trending = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = ({ item }: { item: typeof trendingItems[0] }) => (
    <div className="relative min-w-[250px] rounded-sm overflow-hidden max-md:min-w-[350px]">
      {item.label && (
        <div className="bg-[#00A95D] flex gap-1 text-white text-[10px] items-center font-[latoRegular] w-fit px-[6px] py-[3px] absolute top-[10px] left-[10px] rounded-sm">
          <img src="/trendingIcon.svg" alt="new arrivals" />
          <span>{item.label}</span>
        </div>
      )}
      <img
        src={item.img}
        alt={item.title}
        className="rounded-t-sm w-full max-h-[340px] object-fill max-xl:object-cover"
      />
      <div className="flex justify-between bg-[#262626] rounded-b-sm px-5 py-[17.5px] font-[latoRegular]">
        <div>
          <p className="text-[16px] text-white mb-[13px]">{item.title}</p>
          <p className="text-[#C4C4C4]">{item.subtitle}</p>
        </div>
        <button className="border border-[#D9D9D9] rounded-lg px-6 py-3 max-md:text-[14px] text-white text-sm cursor-pointer max-md:py-2">
          {item.price} Shop Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="my-[68px]">
      <div className="flex justify-between w-full max-w-[1440px] mx-auto px-[90px] mb-[50px] max-md:px-5">
        <h4 className="text-[28px] font-[latoBold] max-md:text-[20px]">
          Trending must-haves
        </h4>
        <div className="flex items-center gap-1">
          <span className="text-sm">View All </span>
          <img src="/rightArrow.svg" alt="right arrow" className="w-4 h-4" />
        </div>
      </div>

      {isMobile ? (
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
          className="px-5"
        >
          {trendingItems.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "350px",marginLeft: "20px" }}
            >
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center gap-5 max-xl:flex-col max-xl:px-[90px] max-md:px-5">
          {trendingItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
