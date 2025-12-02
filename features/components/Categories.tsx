"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Categories = () => {
  const pathname = usePathname();
  const isWoman = pathname === "/woman";

  const [isVisible, setIsVisible] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);

  return (
    <div>
      {!isWoman && (
        <nav className="w-full mx-auto max-w-[1440px] px-[90px] font-[latoRegular] py-4 mt-28px">
          <ul className="flex text-[#555555] text-[14px]  items-center justify-between">
            <li
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              <Link
                href="/woman"
                className={`hover:text-[#FF7A00] transition duration-300 ${
                  (isVisible || isMouseIn) && "text-[#FF7A00]"
                }`}
              >
                Woman
              </Link>
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
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300"
              >
                Male
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Mother-Child
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Home & Furniture
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Super market
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Cosmetics
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Shoes & Bags
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Sport & Outdoor
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FF7A00] transition duration-300 "
              >
                Best Seller
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Categories;
