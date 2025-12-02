import Image from "next/image";

const SubFooter = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-[100px]">
        <div className="flex justify-between border-b border-[#D9D9D9] pb-3 mt-6">
          <ul className="flex gap-4">
            <li>
              <Image
                width={24}
                height={24}
                src="/footerVisa.svg"
                alt="visa"
                className="mix-blend-luminosity opacity-30"
              />
            </li>
            <li>
              <Image
                width={24}
                height={24}
                src="/footerMs.svg"
                alt="mastercard"
                className="mix-blend-luminosity opacity-30"
              />
            </li>
            <li>
              <Image
                width={24}
                height={24}
                src="/footerPaypal.svg"
                alt="paypal"
                className="mix-blend-luminosity opacity-30"
              />
            </li>
          </ul>
          <div className="flex items-center">
            <span>English</span>
            <Image
                width={24}
                height={24} src="/Arrow.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-between py-[24.5px]">
          <p>165-179 Forster Road City of Monash, Melbourne, Australia</p>
          <p className="text-[#9D9D9D] ">
            ©2023 Copyright in reserved for lumine shop
          </p>
          <ul className="flex gap-6">
            <li>
              <img
                 src="/Instagram.svg" alt="instagram" />
            </li>
            <li>
              <img
                 src="/FB.svg" alt="facebook" />
            </li>
            <li>
              <img
                 src="/Telegram.svg" alt="telegram" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
