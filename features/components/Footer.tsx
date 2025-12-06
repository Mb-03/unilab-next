"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname !== "/aboutus";

  return (
    <div>
      {isAboutPage && (
        <div className="bg-[#D1E2EB] w-full mt-[155px] font-[latoRegular] max-md:mt-0">
          <footer className="max-w-[1440px] mx-auto relative ">
            {isHomePage && (
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7296AB] rounded-lg py-8 px-14 flex flex-col items-center overflow-y-hidden max-md:hidden">
                <h4 className="font-[latoBold] text-white text-[32px] mb-[23px]">
                  Luminaee <span className="text-[#D1E2EB]">Store</span>
                </h4>
                <p className="text-white text-[16px] font-[latoRegular] mb-6 text-center">
                  Register your email not to miss the last minutes off+ Free
                  delivery
                </p>
                <div className="relative w-full flex justify-center">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-white py-2 px-3 rounded-lg w-full max-w-[260px]"
                  />
                  <Image
                    width={24}
                    height={24}
                    src="/footerEmailIcon.svg"
                    alt="send email"
                    className="absolute right-[25%] top-1/2 transform -translate-y-1/2"
                  />
                </div>
              </div>
            )}
            <nav className="flex gap-[126px] px-[250px] pb-[60px] pt-[130px] max-xl:grid max-xl:grid-cols-2 max-xl:mx-auto max-lg:px-20">
              <div>
                <span className=" font-[latoBold] text-[#262626] text-[14px]">
                  Company
                </span>
                <ul className="space-y-[15px] mt-[25px]">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Store</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <span className=" font-[latoBold] text-[#262626] text-[14px]">
                  Career Opportunities
                </span>
                <ul className="space-y-[15px] mt-[25px]">
                  <li>
                    <a href="#">Selling Programs</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Cooperation</a>
                  </li>
                </ul>
              </div>
              <div>
                <span className=" font-[latoBold] text-[#262626] text-[14px]">
                  How to Buy
                </span>
                <ul className="space-y-[15px] mt-[25px]">
                  <li>
                    <a href="#">MakingPayments</a>
                  </li>
                  <li>
                    <a href="#">Delivery Options</a>
                  </li>
                  <li>
                    <a href="#">Buyer Protection</a>
                  </li>
                  <li>
                    <a href="#">New User Guide</a>
                  </li>
                </ul>
              </div>
              <div>
                <span className=" font-[latoBold] text-[#262626] text-[14px]">
                  Help
                </span>
                <ul className="space-y-[15px] mt-[25px]">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </nav>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Footer;
