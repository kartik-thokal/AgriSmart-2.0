import { useParams, Link } from "react-router-dom";
import { crops } from "../../utils/cropData";
import { 
  ChevronLeft, 
  Calendar, 
  Droplets, 
  Wind, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

const CropDetails = () => {
  const { cropName } = useParams();
  const crop = crops[cropName];

  if (!crop) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold">Crop Profile Missing</h2>
        <Link to="/crops" className="mt-4 text-green-600 font-bold hover:underline">
          Return to Crop Intelligence
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Header */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={crop.image || "/api/placeholder/1200/400"} 
          className="w-full h-full object-cover"
          alt={crop.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <Link to="/crops" className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ChevronLeft size={20} /> Back to Crops
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              {crop.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Growth Stages Timeline */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Calendar className="text-green-600" />
                Growth Lifecycle
              </h2>
              <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800 ml-6 hidden md:block" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-green-500 before:via-gray-300 before:to-transparent">
              {Object.entries(crop.sections).map(([key, value], index) => (
                <div key={key} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon Node */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle2 size={18} />
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 transition-all hover:border-green-500/30 hover:shadow-xl">
                    <h3 className="text-xl font-black capitalize text-green-700 dark:text-green-400 mb-2">
                      {key.replace(/([A-Z])/g, " $1")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Quick Stats Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-green-50 dark:bg-green-900/10 rounded-[2.5rem] p-8 border border-green-100 dark:border-green-900/30">
              <h3 className="text-xl font-bold mb-6">Environment Stats</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                    <Droplets className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Water Need</p>
                    <p className="font-bold">Moderate-High</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                    <Clock className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Duration</p>
                    <p className="font-bold">110 - 130 Days</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                    <Wind className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ideal Temp</p>
                    <p className="font-bold">22°C - 30°C</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200 dark:shadow-none">
                Download PDF Guide
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CropDetails;