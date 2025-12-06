"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProductDetails = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-[1440px] px-[90px] mt-10">
      <div
        className={`overflow-y-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-[2000px]" : "max-h-[300px]"
        }`}
      >
        <div className="flex gap-5 text-[#555555] font-[latoRegular] bg-linear from-white/0  to-white ">
          <div className="mb-6 flex flex-col flex-1/2">
            <div className="flex flex-col mb-4">
              <span className="mb-4 text-[#262626] font-[latoBOld]">
                Product Description
              </span>
              <p>
                Short dress with a plunging V-neckline and tie detail. Wide
                sleeves falling below the elbow. Contrast bead details.
                Invisible back zip fastening.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="mb-4 text-[#262626] font-[latoBOld]">
                Product Description
              </span>
              <ul className="list-disc ml-4 flex flex-col gap-3">
                <li className="text-[14px] text-[#555555]">Lenght | Regular</li>
                <li className="text-[14px] text-[#555555]">Pattern | Floral</li>
                <li className="text-[14px] text-[#555555]">Size | 38</li>
                <li className="text-[14px] text-[#555555]">
                  Fit | Regular Fit
                </li>
                <li className="text-[14px] text-[#555555]">
                  Age group | Adult
                </li>
                <li className="text-[14px] text-[#555555]">
                  Leg opening | Wide leg
                </li>
                <li className="text-[14px] text-[#555555]">
                  Sleeve lenght | Long sleeve
                </li>
                <li className="text-[14px] text-[#555555]">
                  Package contents | 2 pcs
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1/2">
            <div className="flex flex-col mb-4">
              <span className="mb-4 text-[#262626] font-[latoBOld]">
                Compostion
              </span>
              <p className="">
                We work with monitoring programmes to ensure compliance with our
                social, environmental and health and safety standards for our
                products. To assess compliance, we have developed a programme of
                audits and continuous improvement plans. OUTER SHELL 90%
                cotton10% linen
              </p>
            </div>
            <div className="flex flex-col">
              <span className="mb-4 text-[#262626] font-[latoBOld]">
                Care instructions
              </span>
              <ul className="flex flex-col gap-3">
                <li>Care instruction 1</li>
                <li>Care instruction 2</li>
                <li>Care instruction 3</li>
                <li>Care instruction 4</li>
                <li>Care instruction 5</li>
                <li>Care instruction 6</li>
                <li>Care instruction 7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center w-full text-sm font-medium text-gray-700 gap-2 mt-5 cursor-pointer border-b border-[#D9D9D9] pb-1"
      >
        {expanded ? (
          <>
            <FaChevronUp size={12} />
            SHOW LESS
          </>
        ) : (
          <>
            <FaChevronDown size={12} />
            SHOW MORE
          </>
        )}
      </button>
    </div>
  );
};

export default ProductDetails;
