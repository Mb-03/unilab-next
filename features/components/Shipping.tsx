import { FaPlus } from "react-icons/fa";

const Shipping = () => {
  return (
    <div className="max-w-[1440px] px-[90px] font-[latoRegular] max-md:px-5">
      <div className="mt-6">
        <span className="font-[latoBold]">Shipping</span>
        <p className="text-[#555555] mt-3">
          Calculate the shipping cost by region
        </p>
        <div className="flex gap-6 items-center mt-6">
          <span>Shipping to</span>
          <div className="relative">
            <label
              className="absolute  left-2.5 transform -translate-y-1/2 top-1/2"
              htmlFor="countries"
            >
              County
            </label>
            <select
              className="px-2.5 py-2.5 border rounded-sm border-[#C4C4C4] min-w-[280px] pl-20"
              name="Sydney"
              id="countries"
            >
              <option value="Sydney">Country 1</option>
              <option value="Sydney">Country 1</option>
              <option value="Sydney">Country 1</option>
              <option value="Sydney">Country 1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-6 justify-items-center w-full mt-8 mx-auto px-[200px] max-lg:px-[100px] max-md:px-5 max-md:gap-x-1 max-md:mx-0">
        <span className=" text-[#555555]">Shipping Company</span>
        <span className=" text-[#555555]">Shipping Cost</span>
        <span className=" text-[#555555]">Estimated Delivery</span>
        <span className=" text-[#555555]">Package Insurance</span>
        <div className="col-span-4 border-b border-gray-300 w-full"></div>

        <img
          src="/shippingIcon.svg"
          alt="shipping logo"
          className="max-w-[165px] max-md:max-w-[120px]"
        />
        <span className="text-[14px]">Free</span>
        <span className="text-[14px]">14–21 days</span>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="chk1" />
          <label htmlFor="chk1" className="text-[14px]">Unavailable</label>
        </div>

        <img
          src="/shippingIcon.svg"
          alt="shipping logo"
          className="max-w-[165px] max-md:max-w-[120px]"
        />
        <span className="text-[14px]">Free</span>
        <span className="text-[14px]">14–21 days</span>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="chk2" />
          <label htmlFor="chk2" className="text-[14px]">Unavailable</label>
        </div>

        <img
          src="/shippingIcon.svg"
          alt="shipping logo"
          className="max-w-[165px] max-md:max-w-[120px]"
        />
        <span className="text-[14px]">Free</span>
        <span className="text-[14px]">14–21 days</span>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="chk3" />
          <label htmlFor="chk3" className="text-[14px]">Unavailable</label>
        </div>
      </div>
      <div className="mt-[44px] max-md:px-5">
        <span className="font-[latoBold]">Payment</span>
        <p className="text-[#555555]">
          Payment methods supported with our platform
        </p>
        <div className="flex gap-10 mt-10">
          <img src="/paypal.svg" alt="paypal logo" />
          <img src="/paypal.svg" alt="paypal logo" />
          <img src="/paypal.svg" alt="paypal logo" />
        </div>
      </div>
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

export default Shipping;
