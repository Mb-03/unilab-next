"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

type SideMenuProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const SideMenuMobile = ({ isOpen, toggleOpen }: SideMenuProps) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="bg-[#F5F5F5] fixed inset-0 top-0 bottom-[580px] left-0 w-full h-full z-40  md:hidden py-8 overflow-y-auto px-4">
      <div className="mb-[43px] flex items-center gap-[178px]">
        <FaTimes onClick={() => toggleOpen()} />
        <h2 className="  font-[latoBold] ">Menu</h2>
      </div>
      <ul className="flex flex-col gap-5">
        <li
          onClick={() => setIsHidden((prev) => !prev)}
          className="hover:text-[#FF7A00] text-[14px] text-[#555555] "
        >
          Woman
        </li>
        {isHidden && (
          <div className="grid grid-cols-2 gap-1 h-full overflow-auto bg-white rounded p-6">
            <div className="flex flex-col gap-2">
              <div className="space-y-2 flex flex-col ">
                <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                  SHOE & BAG
                </span>
                <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                  <li>
                    <Link href="#">Casual Shoes</Link>
                  </li>
                  <li>
                    <Link href="#">Boots</Link>
                  </li>
                  <li>
                    <Link href="#">Sandals</Link>
                  </li>
                  <li>
                    <Link href="#">Slippers</Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 flex flex-col">
                <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                  PARTY SUPPLIES
                </span>
                <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                  <li>
                    <Link href="#">Event & Party</Link>
                  </li>
                  <li>
                    <Link href="#">Christmas</Link>
                  </li>
                  <li>
                    <Link href="#">Artificial Decorations</Link>
                  </li>
                  <li>
                    <Link href="#">Wedding</Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                    LUXURY &<br /> DESIGNER
                  </span>
                  <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                    <li>
                      <Link href="#">Towels</Link>
                    </li>
                    <li>
                      <Link href="#">Bathroom Scales</Link>
                    </li>
                    <li>
                      <Link href="#">Bath Mats</Link>
                    </li>
                    <li>
                      <Link href="#">Shower Caps</Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 flex flex-col">
                  <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                    SPORT & <br />
                    OUTDOORS
                  </span>
                  <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                    <li>
                      <Link href="#">Team Sports</Link>
                    </li>
                    <li>
                      <Link href="#">Water Sports</Link>
                    </li>
                    <li>
                      <Link href="#">Outdoor Recreation</Link>
                    </li>
                    <li>
                      <Link href="#">Fitness Equipment</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-12 gap-4 ">
              <div className="space-y-2 flex flex-col">
                <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                  HOME TEXTILE
                </span>
                <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                  <li>
                    <Link href="#">Bedding</Link>
                  </li>
                  <li>
                    <Link href="#">Pillows</Link>
                  </li>
                  <li>
                    <Link href="#">Handkerchief Towels</Link>
                  </li>
                  <li>
                    <Link href="#">Curtain</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 flex flex-col">
                <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                  COSMETICS
                </span>
                <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                  <li>
                    <Link href="#">
                      Shampoo and <br /> Conditioner
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Styling Products</Link>
                  </li>
                  <li>
                    <Link href="#">Hair Accessories</Link>
                  </li>
                  <li>
                    <Link href="#">Men's Grooming</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 flex flex-col">
                <span className="mb-4 font-[latoBold] text-[#262626] text-[14px]">
                  Clothes
                </span>
                <ul className="flex flex-col gap-2 text-[#555555] text-[14px]">
                  <li>
                    <Link href="#">Bothrefms</Link>
                  </li>
                  <li>
                    <Link href="#">Women's Clothing</Link>
                  </li>
                  <li>
                    <Link href="#">T-Shirts and Tops</Link>
                  </li>
                  <li>
                    <Link href="#">Bothrefms</Link>
                  </li>
                  <li>
                    <Link href="#">Dresses</Link>
                  </li>
                  <li>
                    <Link href="#">Outerwear</Link>
                  </li>
                  <li>
                    <Link href="#">Formal Wear</Link>
                  </li>
                  <li>
                    <Link href="#">Casual Wear</Link>
                  </li>
                  <li>
                    <Link href="#">Seasonal Collections</Link>
                  </li>
                  <li>
                    <Link href="#">Sports Bras</Link>
                  </li>
                  <li>
                    <Link href="#">Workout Tops</Link>
                  </li>
                  <li>
                    <Link href="#">Fall Wardrobe</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Male
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Mother-Child
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Super market
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Cosmetics
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Shoe & Bag
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Electronic
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Sport & Outdoor
        </li>
        <li className="hover:text-[#FF7A00] text-[14px] text-[#555555] ">
          Best seller
        </li>
      </ul>
    </div>
  );
};

export default SideMenuMobile;
