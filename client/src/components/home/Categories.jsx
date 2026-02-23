import { Link } from "react-router-dom";
import { 
  Sprout, 
  FlaskConical, 
  Bug, 
  Wrench, 
  Droplets, 
  Cpu, 
  ArrowUpRight 
} from "lucide-react";

const categories = [
  { id: 1, name: "Seeds", icon: Sprout, path: "/seeds", count: "120+ Items", color: "text-emerald-600" },
  { id: 2, name: "Fertilizers", icon: FlaskConical, path: "/fertilizer", count: "80+ Items", color: "text-blue-600" },
  { id: 3, name: "Pesticides", icon: Bug, path: "/pesticide", count: "45+ Items", color: "text-orange-600" },
  { id: 4, name: "Tools", icon: Wrench, path: "/tools", count: "200+ Items", color: "text-slate-600" },
  { id: 5, name: "Irrigation", icon: Droplets, path: "/irrigation", count: "30+ Items", color: "text-cyan-600" },
  { id: 6, name: "Smart Equipment", icon: Cpu, path: "/tools", count: "15+ Items", color: "text-purple-600" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-green-600"></span>
              Department
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Premium <span className="text-green-600">Categories</span>
            </h2>
          </div>
          <Link to="/products" className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold hover:text-green-600 transition-colors">
            Explore All Inventory <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.id} 
                to={category.path}
                className="group relative bg-gray-50 dark:bg-gray-900/50 rounded-[2rem] p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800 hover:border-green-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Background Accent Blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

                {/* Icon Container */}
                <div className={`relative w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-900 ${category.color}`}>
                  <Icon size={36} strokeWidth={1.5} />
                  
                  {/* Floating Action Circle */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </div>
                
                <div className="relative text-center">
                  <h3 className="text-gray-900 dark:text-white font-black text-lg mb-1 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                    {category.count}
                  </p>
                </div>

                {/* Bottom Status bar */}
                <div className="absolute bottom-4 w-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full group-hover:w-8 group-hover:bg-green-600 transition-all duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;