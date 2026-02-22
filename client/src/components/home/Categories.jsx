import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Seeds", icon: "🌱", path: "/seeds" },
  { id: 2, name: "Fertilizers", icon: "🧪", path: "/fertilizer" },
  { id: 3, name: "Pesticides", icon: "🐛", path: "/pesticide" },
  { id: 4, name: "Tools", icon: "🛠️", path: "/products?category=tools" },
  { id: 5, name: "Irrigation", icon: "💧", path: "/products?category=irrigation" },
  { id: 6, name: "Smart Equipment", icon: "🚜", path: "/products?category=smart-equipment" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Shop by Categories
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Find everything you need for a healthy harvest.</p>
          </div>
          {/* Optional: "View All" link if you have many categories */}
          <Link to="/products" className="text-green-600 font-semibold hover:underline hidden sm:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.path}
              className="group bg-green-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-green-300 dark:hover:border-green-700"
            >
              {/* Icon Container with background circle on hover */}
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm group-hover:scale-110 group-hover:bg-green-100 dark:group-hover:bg-green-900 transition-all duration-300">
                {category.icon}
              </div>
              
              <p className="text-gray-800 dark:text-gray-200 font-semibold text-center group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                {category.name}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;