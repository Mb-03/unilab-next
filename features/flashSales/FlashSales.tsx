import FlashSalesCard from "./FlashSalesCard";

const FlashSales = () => {
  return (
    <div>
      <div className="w-full max-w-[1440px] flex justify-between mx-auto px-[90px] mt-[84px] mb-[48px] max-md:px-5">
        <h4 className="text-[28px] font-[latoBold]">Flash Sales</h4>
        <div className="flex items-center">
          <p className="text-sm">
            <a href="#">View All</a>
          </p>
          <img src="./rightArrow.svg" alt="right arrow" className="w-4 h-4" />
        </div>
      </div>
      <FlashSalesCard />
    </div>
  );
};

export default FlashSales;
