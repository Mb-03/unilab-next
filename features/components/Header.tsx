"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "../navLink/NavLink";
import { useFavourite } from "../context/FavouriteContext";
import { FaHeart, FaList, FaXbox } from "react-icons/fa";
import { useState } from "react";
import { useDebounce } from "../debounce/UseDebounce";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import SideMenuMobile from "./SideMenuMobile";
import { useCartContext } from "../context/CartContext";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    router.push(`/search/${search.trim()}`);
  };

  const { favourite } = useFavourite();
  const { item } = useCartContext();

  return (
    <div>
      <header className="max-w-[1440px] mx-auto px-[90px] py-[31.5px] w-full flex justify-between font-[latoRegular] max-xl:flex-col gap-[17.5px] max-md:px-5">
        <div className="flex justify-between flex-col md:flex-row ">
          <div className="flex items-center justify-between">
            <div className="z-10">
              <FaList
                className={`md:hidden ${isOpen && <FaXbox />}`}
                onClick={() => setIsOpen((prev) => !prev)}
              />
              {isOpen && (
                <SideMenuMobile
                  isOpen={isOpen}
                  toggleOpen={() => setIsOpen(false)}
                />
              )}
            </div>
            <Link href="/">
              <div className="flex justify-center items-center gap-[6.5px] max-md:justify-between ">
                <div className="flex gap-2 items-center">
                  <img
                    src="/Logo.svg"
                    alt="Company logo"
                    className="w-[49px] h-[33px] max-md:w-[40px] max-md:h-[27px]"
                  />
                  <h2 className="font-bold text-[32px] max-md:text-[22px]">
                    Luminae
                  </h2>
                </div>
              </div>
            </Link>
            <div className="flex md:hidden">
              <img
                src="/cartDark.svg"
                alt="shopping cart"
                className="w-6 h-6 "
              />

              <span className="ml-2 rounded-[100%] bg-[#3DC47E] px-2 py-2 w-6 h-6 flex items-center text-white">
                3
              </span>
            </div>
          </div>

          <div className="flex ml-[28.5px] items-center relative max-md:ml-0">
            <form onSubmit={handleSearch} className="w-full max-md:mt-[48px]">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="px-2 py-3 border-[#E9E9E9] border rounded-sm  min-w-[345px] h-10 max-md:min-w-full pr-[190px] max-md:pr-[190px]"
                placeholder="Search Products"
              />
              <button
                className="flex items-center cursor-pointer"
                type="submit"
              >
                <img
                  src="/Search.svg"
                  alt="Search icon "
                  className="border-l border-[#E9E9E9] absolute right-[11.5px] px-3 transform translate-y-[-100%]"
                />
              </button>
            </form>

            <div className="flex items-center gap-[7px] absolute mr-3 right-[56px] max-md:bottom-[8px]">
              <span className="text-sm">All categories</span>
              <img src="/Arrow.svg" alt="down arrow " />
            </div>
          </div>
        </div>
        <div className="flex gap-20 max-xl:justify-between max-md:hidden">
          <div className="flex items-center">
            <nav>
              <ul className="flex list-none gap-[50px] text-[#555555]">
                <li>
                  <NavLink href="/aboutus">About us</NavLink>
                </li>
                <li>
                  <NavLink href="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink href="/contactus">Contact us</NavLink>
                </li>
                <li>
                  <NavLink href="/help&support">Help & support</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <nav>
              <ul className="flex list-none gap-3">
                <li>
                  <a href="#">
                    <img src="/Instagram.svg" alt="logo" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <img src="/FB.svg" alt="logo" />
                  </a>
                </li>{" "}
                <li>
                  <a href="#">
                    <img src="/Telegram.svg" alt="logo" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="bg-[#262626] w-full flex justify-center max-md:hidden">
        <div className="max-w-[1440px] mx-auto  px-[90px] py-[8px] w-full flex  font-[latoBold] text-white justify-between">
          <div className="flex items-center gap-1">
            <img src="/categories.svg" alt="categories" />
            <h2 className="text-[20px]">Categories</h2>
          </div>
          <div className="flex items-center ml-10">
            <span className="font-[latoRegular] text-[12px]">USD</span>
            <img src="/arrowWhite.svg" alt="arrow" />
          </div>
          <div className="flex items-center ml-3">
            <span className="font-[latoRegular] text-[12px]">English</span>
            <img src="/arrowWhite.svg" alt="arrow" />
          </div>
          <div className="flex gap-[10px] ml-[72px]  border-l border-[#7B7B7B] px-[72px] border-r max-xl:hidden">
            <Image
              width={63}
              height={62}
              src="/menCosmetics.png"
              alt="shavers"
            />
            <div>
              <h4>Weekly Men's Toiletries Coupons.</h4>
              <p className="text-[#C4C4C4] font-[latoRegular] text-[12px]">
                We extend exclusive discounts to our male <br />
                clientele
              </p>
            </div>
          </div>
          <nav className="flex items-center">
            <ul className="flex list-none  ml-[72px] gap-[20px] text-[14px] font-[latoRegular]">
              <li className="flex gap-1 items-center">
                <img src="/signIn.svg" alt="avatar" className="w-6 h-6" />
                <a href="">Sign In</a>
              </li>
              <li className="flex gap-1 items-center relative">
                <Link className="flex gap-1" href="/favourites">
                  <FaHeart
                    className={`text-gra-300 min-w-6 min-h-6 ${
                      favourite.length > 0 && "text-red-500"
                    }`}
                  />
                  Favourites
                </Link>

                {favourite.length > 0 && (
                  <span className="absolute top-[-20px] right-[-15px] bg-[#3DC47E] px-2 py-2 w-6 h-6 flex items-center rounded-[100%]">
                    {favourite.length}
                  </span>
                )}
              </li>
              <li className="flex gap-1 items-center">
                <Link href="/cart" className="flex gap-1 items-center">
                  <img
                    src="/cart.svg"
                    alt="shopping cart"
                    className="w-6 h-6"
                  />
                  <a href="">Cart</a>
                  <span className="ml-2 rounded-[100%] bg-[#3DC47E] px-2 py-2 w-6 h-6 flex items-center">
                    {item.length}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
