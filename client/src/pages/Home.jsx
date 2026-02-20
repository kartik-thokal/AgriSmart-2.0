import HeroSection from "../components/home/HeroSection";
import Categories from "../components/home/Categories";
import PopularProducts from "../components/home/PopularProducts";
import Brands from "../components/home/Brands";
import PromoBanner from "../components/home/PromoBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <PromoBanner/>
      <PopularProducts />
      <Brands />
    </>
  );
};

export default Home;

