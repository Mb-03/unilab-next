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
      <FlashSales />
      <Trending />
      <TopHundred />
      <LandingBannerOne />
      <LandingSwiper />
      <LandingBannerTwo />
    </div>
  );
};

export default Landing;
