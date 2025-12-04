import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div className="p-6 bg-white z-10 flex font-[latoRegular] absolute rounded-lg max-md:hidden">
      <div>
        <div className="flex mb-10 gap-12">
          <div className="space-y-2 flex flex-col min-w-[145px] ">
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
          <div className="space-y-2 flex flex-col min-w-[145px]">
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
          <div className="space-y-2 flex flex-col min-w-[145px]">
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
        </div>
        <div className="flex gap-12">
          <div className="space-y-2 flex flex-col min-w-[145px]">
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
          <div className="space-y-2 flex flex-col min-w-[145px]">
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
          <div className="space-y-2 flex flex-col min-w-[145px]">
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
      <div className="flex ml-12 gap-4 ">
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
        <img src="/headerMenu.png" alt="Womans clothes" className="object-cover rounded-[10px] max-lg:hidden"/>
      </div>
    </div>
  );
};

export default HeaderMenu;
