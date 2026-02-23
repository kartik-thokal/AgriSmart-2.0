import { Link } from "react-router-dom";
import toolData from "../../data/toolData"; // Fixed typo: tootData -> toolData
import { useCart } from '../../context/CartContext';

function Tools() {
    const { addToCart } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 pt-2 pb-8"> {/* Adjusted pt-2 here */}
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Agricultural Tools
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {toolData.map((tool) => {
                    // Find the lowest price to show as "Starting at"
                    const startingPrice = tool.price || Math.min(...tool.sizes.map(s => s.price));
                    
                    return (
                        <div
                            key={tool.id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col group"
                        >
                            {/* Product Image */}
                            <Link to={`/tools/${tool.id}`} className="relative overflow-hidden bg-gray-50 flex items-center justify-center h-[220px]">
                                <img
                                    src={tool.image}
                                    alt={tool.name}
                                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                                />
                                {tool.sizes[0]?.discount > 0 && (
                                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                                        UP TO {tool.sizes[0].discount}% OFF
                                    </span>
                                )}
                            </Link>

                            {/* Product Details */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                                    {tool.name}
                                </h2>
                                
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-clamp-2 italic">
                                    {tool.description}
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
                                            id: `${tool.id}-${tool.sizes[0].label}`, // Use the first size as default
                                            name: tool.name,
                                            price: startingPrice,
                                            image: tool.image,
                                            size: tool.sizes[0].label,
                                            quantity: 1,
                                        })
                                    }
                                    className="mt-auto w-full bg-slate-900 dark:bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-black dark:hover:bg-emerald-700 transition-colors shadow-lg shadow-gray-200 dark:shadow-none"
                                >
                                    Add Base Model
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tools;