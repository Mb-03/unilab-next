import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AlsoLike = () => {
  return (
    <div className="max-w-[1440px] mx-autp px-[90px] font-[latoRegular]">
      <div className="flex flex-col">
        <div className="flex justify-between py-8 items-center">
          <span className="uppercase font-[latoBold]">You migh also like</span>
          <div className="flex items-center">
            <button className="swiperPrev text-black border min-w-[20px] min-h-5 px-3 py-3 border-[#D9D9D9] cursor-pointer">
              <FaArrowLeft />
            </button>
            <button className="swiperNext text-black border min-w-[20px] min-h-5 px-3 py-3 border-[#D9D9D9] cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div></div>
        <div className="py-2">
          <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-slide {
            display: flex
        
        }
          
      
          
          
      `}</style>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiperNext",
              prevEl: ".swiperPrev",
            }}
            className="max-md:flex flex-col"
            slidesPerView={4}
            spaceBetween={20}
          >
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex gap-3 items-center min-w-[300px]">
              <img
                src="/top100Img.svg"
                alt="shopping dress"
                className="max-w-[90px] min-h-full"
              />
              <div className="flex flex-col gap-3">
                <span className="uppercase font-[latoBold] text-[14px] text-[#262626]">
                  Short printed dress
                </span>
                <div className="flex gap-4 items-center">
                  <p className="text-red-500">$69.99</p>
                  <p className="text-[#555555]">$129.99</p>
                  <p className="text-white bg-red-500 p-1 rounded-sm text-[12px]">
                    -40%
                  </p>
                </div>
                <button className="bg-white border border-[#7B7B7B] px-3 py-2 rounded-sm">
                  $39 Add to cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
