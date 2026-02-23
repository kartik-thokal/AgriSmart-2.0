import HeroSection from "../components/home/HeroSection";
import Categories from "../components/home/Categories";
import PopularProducts from "../components/home/PopularProducts";
import Brands from "../components/home/Brands";
import PromoBanner from "../components/home/PromoBanner";
import AIActionTile from "../components/ai/AIActionTile"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 space-y-6">
      
      {/* NEW: AI Priority Alert at the top of Home */}
      <AIActionTile />

      <HeroSection />
      
      <Categories />
      
      <PromoBanner/>
      
      <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-2xl">
         <h2 className="text-xl font-bold mb-4">Trending Mandi Prices</h2>
         {/* You could also put a row of multiple Mandi badges here */}
      </div>

      <PopularProducts />
      <Brands />
    </div>
  );
};

export default Home;

