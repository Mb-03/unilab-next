import Image from "next/image";

const LandingBannerOne = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[90px] flex justify-between mb-[68px] max-md:flex-col max-md:px-5 max-md:items-center">
      <div className="flex 1 max-w-[610px]">
        <div className="flex flex-col bg-[#BF2E3B] max-md:max-w-[210px] text-white font-[latoBold] px-5 py-[68px] ">
          <h3 className="text-[36px] max-md:text-[24px] ">
            Never-Ending Summer
          </h3>
          <p className="text-[28px] font-[latoRegular] mt-4 mb-[31px] max-md:text-[18px]">
            Throwback Shirts & all-day dressed
          </p>
          <a
            href="#"
            className="font-[latoRegular] text-[20px] underline leading-9 max-md:text-[18px]"
          >
            Explore all category
          </a>
        </div>
        <div className="w-[80%] ">
          <img
            src="/landingBanner1.png"
            alt="shopping red dress"
            className="min-h-full object-cover"
          />
        </div>
      </div>
      <div className="flex 1 max-w-[610px] md:hidden">
        <div className="flex flex-col bg-[#0186C4] text-[#F2F3F0] font-[latoBold] px-5 py-[68px] max-w-[310px] max-md:max-w-[210px] ">
          <h3 className="text-[36px] max-md:text-[24px]">
            Best Sellers Everyone Love
          </h3>
          <p className="text-[28px] font-[latoRegular] mt-4 mb-[31px] max-md:text-[18px]">
            poolside glam include
          </p>
          <a
            href="#"
            className="font-[latoRegular] text-[20px] underline leading-9 max-md:text-[18px]"
          >
            Explore all category
          </a>
        </div>
        <div>
          <img
            src="/landingBanner4.png"
            alt="shopping poolside glam"
            className="min-h-full object-cover "
          />
        </div>
      </div>
      <div className="flex 1 max-w-[610px] max-md:hidden">
        <div className="flex flex-col bg-[#1D5159] text-white font-[latoBold] px-5 py-[68px] max-w-[310px]">
          <h3 className="text-[36px]">The most famouse sport brands</h3>
          <p className="text-[28px] font-[latoRegular] mt-4 mb-[31px]">
            Get in gym essentials
          </p>
          <a
            href="#"
            className="font-[latoRegular] text-[20px] underline leading-9"
          >
            Explore all category
          </a>
        </div>
        <div>
          <img
            src="/landingBanner2.png"
            alt="shopping gym essentials"
            className="min-h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingBannerOne;
