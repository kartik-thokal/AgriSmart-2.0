import ProductCard from "../ui/ProductCard";

// img
import TomatoSeed from "../../assets/seeds/TomatoSeeds.png";
import Organicfertilizer from '../../assets/seeds/Organicfertilizer.png'
import Spray from '../../assets/seeds/Spray.png'
import Drip from '../../assets/seeds/Drip.png'

const products = [ 
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    price: 299,
    img: TomatoSeed,  // standardized key
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    price: 499,
    img: Organicfertilizer,
  },
  {
    id: 3,
    name: "Spray Pesticide",
    price: 399,
    img: Spray,
  },
  {
    id: 4,
    name: "Drip Irrigation Kit",
    price: 1499,
    img: Drip,
  },
];

const PopularProducts = () => {
  return (
    <section className="py-16 bg-green-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Popular Products
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;
