import { FaPlus, FaStar } from "react-icons/fa";
import Review from "./Review";

const DetailsReviews = () => {
  return (
    <div className="font-[latoRegular]">
      <div className="max-w-[1440px] px-90px max-md:px-5 mx-auto">
        <div className="mx-auto max-md:px-0 max-md:mx-auto gap-[28px]  py-5 flex justify-between">
          <div>
            <span className="text-[#262626] font-[latoBold]">
              Total Review rate
            </span>
            <p className="text-[#555555] mt-5 mb-3">
              Average rating (10 Reviews &125 Ratings)
            </p>
            <div className="flex items-center">
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <span className="ml-4 text-[#555555]">4.8/5</span>
            </div>
            <button className="mt-5 border px-2.5 py-2.5 rounded-sm">
              Wire a customer review
            </button>
          </div>
          <div className="flex flex-col text-[#555555] gap-4">
            <div className="flex items-center gap-2">
              <span>5 stars</span>
              <div className="min-w-[245px] max-md:min-w-[120px]  h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[75%]"></div>
              </div>
              <span>75%</span>
            </div>
            <div className="flex items-center gap-2">
              <span>4 stars</span>
              <div className="min-w-[245px] h-2 max-md:min-w-[120px] bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[50%]"></div>
              </div>
              <span>50%</span>
            </div>
            <div className="flex items-center gap-2">
              <span>3 stars</span>
              <div className="min-w-[245px] max-md:min-w-[120px] h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[30%]"></div>
              </div>
              <span>30%</span>
            </div>
            <div className="flex items-center gap-2">
              <span>2 stars</span>
              <div className="min-w-[245px] max-md:min-w-[120px] h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[90%]"></div>
              </div>
              <span>90%</span>
            </div>
            <div className="flex items-center gap-2">
              <span>1 stars</span>
              <div className="min-w-[245px] max-md:min-w-[120px] h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[20%]"></div>
              </div>
              <span>20%</span>
            </div>
          </div>
        </div>
      </div>
      {Array.from({ length: 2 }).map((_, i) => (
        <Review key={i} />
      ))}
      <div className="max-md:block md:hidden max-md:px-5">
        <div className="bg-[#E9E9E9] py-3 px-6 mt-8 max-lg:max-w-[345px] max-md:max-w-full">
          <span className="font-[latoBold] border-b border-[#C4C4C4] flex pb-2">
            $79.98
          </span>
          <span className="pt-2 flex gap-[5px] text-[12px] items-center">
            <FaPlus
              className="bg-[#C4C4C4] rounded-lg p-1 text-white"
              size={20}
            />
            Add shipping insurance for $9( declared value only if the package
            gets lost, stolen or damaged.)
          </span>
        </div>
        <div className="flex mt-8 gap-5 justify-between">
          <button className="uppercase bg-[#4172DC] text-white px-8 py-4 rounded-sm min-w-[275px] max-lg:min-w-0 text-sm max-lg:px-4 flex-1">
            Shop Now
          </button>
          <button
            className="flex items-center uppercase px-8 py-4 text-black border border-[#434343] rounded-sm gap-2 min-w-[275px] justify-center max-lg:min-w-0 text-sm max-lg:px-4 flex-1"
            // @ts-expect-error
            onClick={() => toggleItem(data?.id)}
          >
            <img src="/addToCard.svg" alt="add to cart icon" />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsReviews;
