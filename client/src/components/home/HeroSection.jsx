import LandingImg from "../../assets/images/landing.png";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, PlayCircle, Users, Sprout } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* Background Decorative Elements - Mesh Gradient Look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-400 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-emerald-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Value Proposition Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
              <Sprout size={14} /> The Future of Indian Agriculture
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Cultivating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Precision Growth
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
              Empowering farmers with data-driven seeds, premium fertilizers, and 
              AI-powered tools to maximize every acre of your land.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link to="/categories" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-green-600/20 flex items-center justify-center gap-2">
                  Shop Marketplace <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={18} /> How it Works
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 dark:border-gray-900">
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">50k+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Active Farmers</p>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-800" />
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">98%</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Germination Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Floating Card 1: Yield Increase */}
            <div className="absolute -top-6 -left-6 md:left-0 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl z-20 border border-gray-100 dark:border-gray-700 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Yield Boost</p>
                  <p className="text-sm font-black text-gray-900 dark:text-white">+24% This Season</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-green-600 rounded-[2.5rem] rotate-3 scale-95 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src={LandingImg}
                alt="Smart Farming"
                className="relative rounded-[2.5rem] shadow-2xl w-full max-w-lg object-cover transform transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>

            {/* Floating Card 2: Support */}
            <div className="absolute -bottom-8 right-0 md:right-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl z-20 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden">
                       <Users size={16} className="m-1.5 text-gray-500" />
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-bold text-gray-600 dark:text-gray-300">Expert Support <br/> Available 24/7</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;