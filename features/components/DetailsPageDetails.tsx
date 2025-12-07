"use client";

import { useState } from "react";
import ProductDetails from "./ProductDetails";
import DetailsReviews from "./DetailsReviews";
import Shipping from "./Shipping";

const DetailsPageDetails = () => {
  const [isDetails, setIsDetails] = useState(true);
  const [isReviews, setIsReviews] = useState(false);
  const [isShipping, setIsShipping] = useState(false);

  return (
    <div>
      <div className="max-w-[1440px] px-[90px] flex justify-center mx-auto  border-b border-[#D9D9D9] max-md:px-5">
        <div className="flex gap-16 pb-5 max-md:gap-[30px]">
          <span
            className={`font-[latoBold] uppercase text-[14px] text-[#9D9D9D] ${
              isDetails && "text-[#262626]"
            } cursor-pointer`}
            onClick={() => {
              setIsDetails(true);
              setIsReviews(false);
              setIsShipping(false);
            }}
          >
            Product Details
          </span>
          <span
            className={`font-[latoBold] uppercase text-[14px] text-[#9D9D9D] ${
              isReviews && "text-[#262626]"
            } cursor-pointer`}
            onClick={() => {
              setIsDetails(false);
              setIsReviews(true);
              setIsShipping(false);
            }}
          >
            Reviews(5)
          </span>
          <span
            className={`font-[latoBold] uppercase text-[14px] text-[#9D9D9D] ${
              isShipping && "text-[#262626]"
            } cursor-pointer`}
            onClick={() => {
              setIsDetails(false);
              setIsReviews(false);
              setIsShipping(true);
            }}
          >
            Shipping & payment
          </span>
        </div>
      </div>
      {isDetails && <ProductDetails />}
      {isReviews && <DetailsReviews />}
      {isShipping && <Shipping />}
    </div>
  );
};

export default DetailsPageDetails;
