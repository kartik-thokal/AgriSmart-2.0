import { Link } from "react-router-dom";
import { MoveRight, Sprout } from "lucide-react";

// Assets
import Soyabean from '../../assets/images/soyabean.jpg';
import Cotton from '../../assets/images/cotton.jpg';
import Wheat from '../../assets/images/wheat.jpg';
import Sugarcane from '../../assets/images/sugarcane.jpg';

const cropData = [
  { id: 'soybean', name: 'Soybean', img: Soyabean, season: 'Kharif', color: 'from-green-500/20' },
  { id: 'cotton', name: 'Cotton', img: Cotton, season: 'Kharif', color: 'from-blue-500/20' },
  { id: 'wheat', name: 'Wheat', img: Wheat, season: 'Rabi', color: 'from-amber-500/20' },
  { id: 'sugarcane', name: 'Sugarcane', img: Sugarcane, season: 'Annual', color: 'from-emerald-500/20' },
];

const Crops = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white flex items-center gap-3">
            <Sprout className="text-green-600" size={40} />
            Crop Intelligence
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
            Select a crop to view specialized protection schedules and yield tips.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
            4 Crops Tracked
          </span>
        </div>
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cropData.map((crop) => (
          <Link 
            key={crop.id}
            to={`/crops/${crop.id}`} 
            className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={crop.img}
                alt={crop.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${crop.color} to-transparent opacity-60`} />
              
              {/* Season Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                  {crop.season}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-tighter font-semibold">
                    Protection Schedule Available
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <MoveRight size={20} />
                </div>
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-green-600 transition-all duration-300" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Crops;