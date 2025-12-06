"use client"

import { useState } from "react";

const PriceSlider = () => {
  const MIN = 0;
  const MAX = 500;

  const [minValue, setMinValue] = useState(60);
  const [maxValue, setMaxValue] = useState(450);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxValue) setMinValue(value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minValue) setMaxValue(value);
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-semibold mb-3">PRICE</p>

      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-[90px] border rounded-md py-2 px-3 text-center">
          ${minValue}
        </div>

        <span className="text-gray-400">—</span>

        <div className="w-[90px] border rounded-md py-2 px-3 text-center">
          ${maxValue}
        </div>
      </div>

     
      <div className="relative h-5 mt-2">
        
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[4px] bg-gray-300 rounded"></div>

        
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[4px] bg-blue-500 rounded"
          style={{
            left: `${(minValue / MAX) * 100}%`,
            right: `${100 - (maxValue / MAX) * 100}%`,
          }}
        ></div>

        
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minValue}
          onChange={handleMin}
          className="absolute w-full top-0 left-0 pointer-events-auto slider-thumb"
        />

        
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxValue}
          onChange={handleMax}
          className="absolute w-full top-0 left-0 pointer-events-auto slider-thumb"
        />
      </div>

      
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>Minimum ${MIN}</span>
        <span>Maximum ${MAX}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
