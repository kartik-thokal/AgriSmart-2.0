import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const AIActionTile = ({
  title = "Next Best Action",
  description = "Rain expected. Irrigate crops by 6 PM today.",
  onClick,
}) => {
  return (
    <div className="w-full group relative">
      {/* Subtle Glow Effect behind the tile */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative w-full bg-white dark:bg-slate-900 border border-orange-100 dark:border-orange-500/20 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between p-3 gap-4">
          
          <div className="flex items-center gap-3">
            {/* AI Icon - Reduced padding and updated style */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-orange-400 blur-md opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 rounded-xl text-white shadow-lg shadow-orange-500/20">
                <Sparkles size={18} />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  {title}
                </h4>
                {/* Live Indicator */}
                <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping"></span>
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                {description}
              </p>
            </div>
          </div>

          {/* Minimalist Button */}
          <button
            onClick={onClick}
            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-black uppercase tracking-tighter py-2 px-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
          >
            Action <ArrowRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIActionTile;