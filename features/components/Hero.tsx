import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] flex mx-auto relative px-[90px] max-md:hidden ">
      <img
        src="/heroLeft.png"
        alt="shopping Image"
        className="max-w-[547px] max-xl:max-w-[495px] max-xl:max-h-[460px]"
      />
      
      <div className="w-full justify-center  flex flex-col gap-8 items-center max-xl:flex-wrap bg-[url('/heroRight.png')] bg-no-repeat bg-cover ">
        <h3 className=" font-[latoBold] text-[32px] text-white max-xl:max-w-[315px] text-center ">
          KIMONOS, CAFTANS & PAREOS
        </h3>
        <h4 className=" font-[latoRegular] text-[28px] text-white max-xl:max-w-[315px] text-center ">
          Poolside glam included From $4.99
        </h4>
        <button className=" bg-[#4172DC]  px-8 py-4 flex items-center gap-2 text-white font-[latoRegular] cursor-pointer">
          <img src="/heroButton.svg" alt="buy icon" /> SHOP NOW
        </button>
      </div>
      <div className="w-[228px] h-[123px] absolute left-[433px] top-[149px] max-xl:hidden">
        <div className=" bg-white w-full h-full text-center flex flex-col justify-center">
          <span className="text-[#262626] font-[latoBold] text-[20px]">
            Summer Essentials
          </span>
          <p className="text-[#FF2E00] text-[20px] font-[latoBold]">20% off</p>
        </div>
        <div className="bg-[#262626] py-[10px]">
          <p className="text-white text-center">19 Jul-30-Jul</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
