import Image from "next/image";

const LandingBannerOne = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[90px] flex justify-between mb-[68px]">
      <div className="flex 1 max-w-[610px]">
        <div className="flex flex-col bg-[#BF2E3B] text-white font-[latoBold] px-5 py-[68px] ">
          <h3 className="text-[36px]">Never-Ending Summer</h3>
          <p className="text-[28px] font-[latoRegular] mt-4 mb-[31px]">
            Throwback Shirts & all-day dressed
          </p>
          <a
            href="#"
            className="font-[latoRegular] text-[20px] underline leading-9"
          >
            Explore all category
          </a>
        </div>
        <div className="w-[80%] ">
          <Image
          width={310}
          height={383}
            src="/landingBanner1.png"
            alt="shopping red dress"
            className="min-h-full object-cover"
          />
        </div>
      </div>
      <div className="flex 1 max-w-[610px]">
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
          <Image
          width={310}
          height={383}
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
