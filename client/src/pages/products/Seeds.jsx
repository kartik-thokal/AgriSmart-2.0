import { Link } from "react-router-dom";
import seedsData from "../../data/seedsData";
import { useCart } from '../../context/CartContext';

function Seeds() {
    const { addToCart } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 pt-2 pb-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                High-Yield Seeds
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {seedsData.map((seed) => {
                    // Logic to find the lowest price from the sizes array
                    const startingPrice = seed.price || Math.min(...seed.sizes.map(s => s.price));
                    
                    return (
                        <div
                            key={seed.id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col group"
                        >
                            {/* Product Image */}
                            <Link to={`/seeds/${seed.id}`} className="relative overflow-hidden bg-gray-50 flex items-center justify-center h-[220px]">
                                <img
                                    src={seed.image}
                                    alt={seed.name}
                                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                                />
                                {seed.sizes[0]?.discount > 0 && (
                                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
                                        UP TO {seed.sizes[0].discount}% OFF
                                    </span>
                                )}
                            </Link>

                            {/* Product Details */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                                    {seed.name}
                                </h2>
                                
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2 italic">
                                    {seed.description || "Certified high-germination seeds for maximum yield."}
                                </p>

                                <div className="mt-4">
                                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Starting at</span>
                                    <p className="text-emerald-600 dark:text-emerald-400 font-black text-xl leading-none">
                                        ₹{startingPrice.toLocaleString('en-IN')}
                                    </p>
                                </div>

                                {/* Quick Add Button */}
                                <button
                                    onClick={() =>
                                        addToCart({
                                            id: `${seed.id}-${seed.sizes[0].label}`, // Defaults to first packet size
                                            name: seed.name,
                                            price: startingPrice,
                                            image: seed.image,
                                            size: seed.sizes[0].label,
                                            quantity: 1,
                                        })
                                    }
                                    className="mt-auto w-full bg-slate-900 dark:bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-black dark:hover:bg-emerald-700 transition-colors shadow-lg shadow-gray-200 dark:shadow-none"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Seeds;