import { useCart } from '../../context/CartContext';
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import seedsData from "../../data/seedsData";
import DeliveryChecker from "../../components/ui/DeliveryChecker";
import { ChevronLeft, Star, ShieldCheck, Sprout, Leaf, Activity } from 'lucide-react';

function SeedDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = seedsData.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [count, setCount] = useState(1);

  if (!product) return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Product not found</h2>
      <Link to="/seeds" className="mt-4 text-green-600 underline">Back to Seeds</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-2">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mb-4 py-2"> 
          <Link to="/seeds" className="hover:text-green-600 flex items-center gap-1 transition-colors">
            <ChevronLeft size={14} /> Back to Seeds
          </Link>
          <span className="opacity-50">/</span>
          <span className="font-bold text-gray-400 uppercase tracking-widest">{product.name}</span>
        </nav>

        {/* MAIN PRODUCT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN - Image Showcase */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-10 flex justify-center sticky top-20 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[400px] md:max-h-[500px] w-auto object-contain hover:scale-110 transition-transform duration-700"
              />
              {selectedSize?.bestSeller && (
                <div className="absolute top-6 left-6 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                  <Star size={14} fill="currentColor" /> TOP RATED SEED
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Purchase Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 p-8">
              
              <div className="space-y-2">
                <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  <Leaf size={14} /> High-Yield Hybrid Selection
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                  {product.name}
                </h1>
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                  ₹{selectedSize?.price.toLocaleString('en-IN')}
                </span>
                {selectedSize?.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹{selectedSize.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* SIZE SELECTION */}
              <div className="mt-8">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="font-bold text-sm uppercase text-gray-500 tracking-wider">Select Pack Size</h3>
                  <span className="text-xs text-emerald-600 font-medium">Bulk discounts applied</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {product.sizes?.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-300 
                      ${selectedSize?.label === size.label
                          ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 ring-4 ring-emerald-500/10"
                          : "border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-200"
                        }`}
                    >
                      <p className="font-bold text-gray-900 dark:text-white">{size.label}</p>
                      <p className="text-xs text-gray-500 mt-1">₹{size.price.toLocaleString('en-IN')}</p>
                      {size.discount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                          -{size.discount}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-6">
                 <DeliveryChecker />
              </div>

              {/* ACTION AREA */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                    <button onClick={() => setCount(Math.max(1, count - 1))} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:text-emerald-600 transition">-</button>
                    <span className="w-12 text-center font-bold">{count}</span>
                    <button onClick={() => setCount(count + 1)} className="w-10 h-10 flex items-center justify-center font-bold text-xl hover:text-emerald-600 transition">+</button>
                  </div>

                  <button
                    onClick={() => addToCart({
                        id: `${product.id}-${selectedSize.label}`,
                        name: product.name,
                        image: product.image,
                        price: selectedSize.price,
                        size: selectedSize.label,
                        quantity: count,
                    })}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200/50 dark:shadow-none transition-all active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-700 pt-6">
                <div className="flex flex-col items-center text-center gap-1">
                  <ShieldCheck size={20} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Lab Tested</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <Sprout size={20} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">95%+ Germination</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <Activity size={20} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Disease Resistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                Variety Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                Agricultural Profile
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex justify-between border-b border-gray-50 dark:border-gray-700 pb-2">
                  <span className="text-gray-500">Seed Type</span>
                  <span className="font-bold">F1 Hybrid</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 dark:border-gray-700 pb-2">
                  <span className="text-gray-500">Manufacturer</span>
                  <span className="font-bold">{product.brand}</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 dark:border-gray-700 pb-2">
                  <span className="text-gray-500">Expected Maturity</span>
                  <span className="font-bold">60-90 Days</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 dark:border-gray-700 pb-2">
                  <span className="text-gray-500">Soil Preference</span>
                  <span className="font-bold text-emerald-600">Loamy / Well-Drained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeedDetails;