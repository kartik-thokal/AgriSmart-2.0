const categories = [
  {
    id: 1,
    name: "Seeds",
    icon: "🌱",
  },
  {
    id: 2,
    name: "Fertilizers",
    icon: "🧪",
  },
  {
    id: 3,
    name: "Pesticides",
    icon: "🐛",
  },
  {
    id: 4,
    name: "Tools",
    icon: "🛠️",
  },
  {
    id: 5,
    name: "Irrigation",
    icon: "💧",
  },
  {
    id: 6,
    name: "Smart Equipment",
    icon: "🚜",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Shop by Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-green-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-3">
                {category.icon}
              </div>

              <p className="text-gray-800 dark:text-gray-300 font-medium text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
