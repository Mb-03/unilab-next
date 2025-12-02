import Image from "next/image";

const LandingBannerTwo = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[90px] flex justify-between my-[68px]">
      <div className="flex 1 max-w-[610px]">
        <div className="flex flex-col bg-[#D11FB5] text-white font-[latoBold] px-5 py-[68px] ">
          <h3 className="text-[36px]">The Pinky Barbie Edition</h3>
          <p className="text-[28px] font-[latoRegular] mt-4 mb-[31px]">
            Lets play dress up
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
          height={383} src="/landingBanner3.png" alt="shopping pink clothes" className="min-h-full object-cover" />
        </div>
      </div>
      <div className="flex 1 max-w-[610px]">
        <div className="flex flex-col bg-[#0186C4] text-[#F2F3F0] font-[latoBold] px-5 py-[68px] max-w-[310px]">
          <h3 className="text-[36px]">Best Sellers Everyone Love</h3>
          <p className="text-[28px] font-[latoRegular] mt-4 mb-[31px]">poolside glam include</p>
          <a href="#" className="font-[latoRegular] text-[20px] underline leading-9">Explore all category</a>
        </div>
        <div>
          <Image 
          width={310}
          height={383} src="/landingBanner4.png" alt="shopping poolside glam" className="min-h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LandingBannerTwo;
