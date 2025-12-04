import FlashSales from "../flashSales/FlashSales";
import TopHundred from "../top100/TopHundred";
import Hero from "./Hero";
import LandingBannerOne from "./LandingBannerOne";
import LandingBannerTwo from "./LandingBannerTwo";
import LandingSwiper from "./LandingSwiper";
import Trending from "./Trending";

const Landing = () => {
  return (
    <div>
      <Hero />
      <div className="block md:hidden">
        <LandingBannerOne />
      </div>
      <FlashSales />
      <Trending />
      <TopHundred />
      <div className="block max-md:hidden">
        <LandingBannerOne />
      </div>
      <div className="block max-md:hidden">
        <LandingSwiper />
      </div>
      <div className="block max-md:hidden">
        <LandingBannerTwo />
      </div>
    </div>
  );
};

export default Landing;
