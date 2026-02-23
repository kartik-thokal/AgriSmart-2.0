import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const LiveMandiBadge = ({
  crop = "Basmati",
  price = "4200",
  trend = "+4.2",
}) => {
  const trendNumber = parseFloat(trend);
  const isPositive = trendNumber >= 0;

  return (
    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer">
      
      {/* Live Pulse Dot */}
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-tight">
          {crop}
        </span>

        <span className="text-sm font-black text-slate-900 tracking-tighter">
          ₹{price}
        </span>

        <div
          className={`flex items-center font-bold text-[10px] ${
            isPositive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={12} className="mr-0.5" />
          ) : (
            <TrendingDown size={12} className="mr-0.5" />
          )}
          {trend}%
        </div>
      </div>
    </div>
  );
};

export default LiveMandiBadge;