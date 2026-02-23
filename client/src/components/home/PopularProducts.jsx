import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import { Sparkles, ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

// img imports
import TomatoSeed from "../../assets/seeds/TomatoSeeds.png";
import Organicfertilizer from '../../assets/seeds/Organicfertilizer.png';
import Spray from '../../assets/seeds/Spray.png';
import Drip from '../../assets/seeds/Drip.png';

const products = [ 
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    price: 299,
    originalPrice: 450,
    category: "Seeds",
    img: TomatoSeed,
    rating: 4.8,
    isTrending: true,
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    price: 499,
    originalPrice: 600,
    category: "Fertilizer",
    img: Organicfertilizer,
    rating: 4.5,
    isTrending: false,
  },
  {
    id: 3,
    name: "Spray Pesticide",
    price: 399,
    originalPrice: 550,
    category: "Protection",
    img: Spray,
    rating: 4.2,
    isTrending: false,
  },
  {
    id: 4,
    name: "Drip Irrigation Kit",
    price: 1499,
    originalPrice: 2000,
    category: "Tools",
    img: Drip,
    rating: 4.9,
    isTrending: true,
  },
];

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Seeds", "Fertilizer", "Tools"];

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest w-fit">
              <Flame size={12} fill="currentColor" /> High Demand
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Best <span className="text-green-600">Sellers</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-md">
              The most trusted supplies used by over 10,000+ farmers this season.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex bg-white dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-black uppercase tracking-tighter rounded-xl transition-all ${
                  activeTab === tab 
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/20" 
                  : "text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-16 text-center">
  <Link to="/categories" className="inline-block">
    <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl font-black text-gray-900 dark:text-white transition-all hover:border-green-600 hover:text-green-600 hover:shadow-[0_0_20px_rgba(22,163,74,0.15)] active:scale-95">
      
      {/* Visual Label */}
      <span className="relative z-10">Browse All Products</span>
      
      {/* Icon with animated translation */}
      <ArrowRight 
        size={20} 
        className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" 
      />

      {/* Subtle inner background glow on hover */}
      <div className="absolute inset-0 bg-green-50 dark:bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default PopularProducts;