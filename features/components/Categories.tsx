"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);

  return (
    <div>
      <nav className="w-full mx-auto max-w-[1440px] px-[90px] font-[latoRegular] py-4 mt-28px">
        <ul className="flex text-[#555555] text-[14px]  items-center justify-between">
          <li
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <a
              href="#"
              className={`hover:text-[#FF7A00] transition duration-300 ${
                (isVisible || isMouseIn) && "text-[#FF7A00]"
              }`}
            >
              Woman
            </a>
            <div
              onMouseLeave={() => {
                setIsVisible(false);
                setIsMouseIn(false);
              }}
              onMouseEnter={() => setIsMouseIn(true)}
            >
              {(isVisible || isMouseIn) && <HeaderMenu />}
            </div>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300"
            >
              Male
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Mother-Child
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Home & Furniture
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Super market
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Cosmetics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Shoes & Bags
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Electronics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Sport & Outdoor
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FF7A00] transition duration-300 "
            >
              Best Seller
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
