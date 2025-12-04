"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";

// @ts-ignore
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const LandingSwiper = () => {
  return (
    <div className="bg-[#F7DDD0]">
      <div className="max-w-[1440px] mx-auto px-[90px] w-full">
        <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
          
      
          .swiper-slide {
          
          display: flex;
          align-items: center;
          gap: 70px;
          justify-content: center;
        }
          
      `}</style>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
        >
          <SwiperSlide className="flex items-center gap-8">
            <div className="flex items-center justify-between px-[70px]">
              <div className="max-w-[490px]">
                <h4 className="text-[#465D6B] text-[24px] font-[latoBold] mb-4">
                  MAGSAFE
                </h4>
                <p className="text-[20px] text-[#555555]">
                  Snap on a magenit case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
              <div>
                <img src="/swiperIphone.png" alt="iphone" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between px-[70px]">
              <div className="max-w-[490px]">
                <h4 className="text-[#465D6B] text-[24px] font-[latoBold] mb-4">
                  MAGSAFE
                </h4>
                <p className="text-[20px] text-[#555555]">
                  Snap on a magenit case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
              <div>
                <img src="/swiperIphone.png" alt="iphone" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between px-[70px]">
              <div className="max-w-[490px]">
                <h4 className="text-[#465D6B] text-[24px] font-[latoBold] mb-4">
                  MAGSAFE
                </h4>
                <p className="text-[20px] text-[#555555]">
                  Snap on a magenit case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
              <div>
                <img src="/swiperIphone.png" alt="iphone" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between px-[70px]">
              <div className="max-w-[490px]">
                <h4 className="text-[#465D6B] text-[24px] font-[latoBold] mb-4">
                  MAGSAFE
                </h4>
                <p className="text-[20px] text-[#555555]">
                  Snap on a magenit case, wallet, or both. And get faster
                  wireless charging.
                </p>
              </div>
              <div>
                <img src="/swiperIphone.png" alt="iphone" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LandingSwiper;
