import Image from "next/image";

const Trending = () => {
  return (
    <div className="my-[68px]">
      <div>
        <div className="flex justify-between w-full max-w-[1440px] mx-auto px-[90px] mb-[50px]">
          <h4 className="text-[28px] font-[latoBold]">Trending must-haves</h4>
          <div className="flex items-center gap-1">
            <span className="text-sm">View All </span>
            <img src="/rightArrow.svg" alt="right arrow" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="relative">
            <div className="bg-[#00A95D] flex gap-1 text-white text-[10px] items-center font-[latoRegular] w-fit px-[6px] py-[3px] absolute top-[10px] left-[10px] rounded-sm">
              <img src="/trendingIcon.svg" alt="new arrivals" />
              <span>New Arrivals</span>
            </div>
            <Image
              width={406}
              height={344}
              src="/trending1.png"
              alt="shopping calvin kelin"
              className="rounded-t-sm"
            />
            <div className="flex justify-between bg-[#262626] rounded-b-sm px-5 py-[17.5px] font-[latoRegular]">
              <div>
                <p className="text-[16px] text-white mb-[13px]">
                  Cool & Sexy Calvin Klein
                </p>
                <p className="text-[#C4C4C4]">Dotted dress-Casual</p>
              </div>
              <button className="border border-[#D9D9D9] rounded-lg px-6 py-3 text-white text-sm cursor-pointer">
                $89 Shop Now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              width={406}
              height={344}
              src="/trending2.png"
              alt="shopping calvin kelin"
              className="rounded-t-sm"
            />
            <div className="flex justify-between bg-[#262626] rounded-b-sm px-5 py-[17.5px] font-[latoRegular]">
              <div>
                <p className="text-[16px] text-white mb-[13px]">
                  Cool & Sexy Calvin Klein
                </p>
                <p className="text-[#C4C4C4]">Dotted dress-Casual</p>
              </div>
              <button className="border border-[#D9D9D9] rounded-lg px-6 py-3 text-white text-sm cursor-pointer">
                $89 Shop Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#00A95D] flex gap-1 text-white text-[10px] items-center font-[latoRegular] w-fit px-[6px] py-[3px] absolute top-[10px] left-[10px] rounded-sm">
              <img src="/trendingIcon.svg" alt="new arrivals" />
              <span>New Arrivals</span>
            </div>
            <Image
              width={406}
              height={344}
              src="/trending3.png"
              alt="shopping zara"
              className="rounded-t-sm"
            />
            <div className="flex justify-between bg-[#262626] rounded-b-sm px-5 py-[17.5px] font-[latoRegular]">
              <div>
                <p className="text-[16px] text-white mb-[13px]">
                  beige coat Zara
                </p>
                <p className="text-[#C4C4C4]">Dotted dress-Casual</p>
              </div>
              <button className="border border-[#D9D9D9] rounded-lg px-6 py-3 text-white text-sm cursor-pointer">
                $102 Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
