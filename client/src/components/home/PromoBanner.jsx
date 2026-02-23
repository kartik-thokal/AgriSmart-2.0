import React, { useState } from "react";
import { Copy, Truck, ShoppingBag, Percent, CheckCircle } from "lucide-react";

const PromoCard = ({ gradient, title, sub, code, icon: Icon, lightIcon = false }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative overflow-hidden rounded-[2rem] p-6 ${gradient} shadow-2xl shadow-black/5 group transition-all duration-500 hover:-translate-y-2`}>
      {/* Abstract Background Shapes */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between">
          <div className={`${lightIcon ? 'bg-white/20 text-white' : 'bg-black/10 text-black/70'} p-3 rounded-2xl backdrop-blur-md`}>
            <Icon size={24} strokeWidth={2.5} />
          </div>
          {code && (
            <button 
              onClick={() => copyToClipboard(code)}
              className="flex items-center gap-2 bg-black/10 hover:bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl transition-colors"
            >
              {copied ? <CheckCircle size={14} className="text-white" /> : <Copy size={14} />}
              <span className="text-[10px] font-black uppercase tracking-tighter">
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
          )}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-black leading-none tracking-tight">
            {title}
          </h3>
          <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-80">
            {sub}
          </p>
        </div>

        {code && (
          <div className="mt-4 flex items-center justify-between bg-white/20 border border-white/30 backdrop-blur-sm px-4 py-2 rounded-xl">
            <span className="text-xs font-black tracking-widest">{code}</span>
            <span className="text-[10px] font-bold opacity-60 uppercase">Apply at checkout</span>
          </div>
        )}
      </div>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Subtle and Clean */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Exclusive Offers</h2>
          <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <PromoCard 
            gradient="bg-gradient-to-br from-emerald-400 to-green-600 text-white"
            icon={ShoppingBag}
            lightIcon={true}
            title="₹50 Instant Off"
            sub="On your first mobile app order"
            code="AGRISMART50"
          />

          <PromoCard 
            gradient="bg-gradient-to-br from-amber-300 to-orange-500 text-black"
            icon={Truck}
            title="Free Shipping"
            sub="Valid on all orders above ₹499"
            code="FREEDEL"
          />

          <PromoCard 
            gradient="bg-gradient-to-br from-slate-800 to-slate-950 text-white"
            icon={Percent}
            lightIcon={true}
            title="Flat 1.5% Off"
            sub="Bulk orders above ₹1,500"
            code="SAVEBULK"
          />

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;