import { Link } from "react-router-dom";
import irrigationData from "../../data/irrigationData";
import { useCart } from '../../context/CartContext'
function Irrigation() {
    const { addToCart } = useCart();
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Fertilizer</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {irrigationData.map((irrigation) => (
                    <div
                        key={irrigation.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-[400px] flex flex-col group"
                    >
                        <Link to={`/irrigation/${irrigation.id}`} className="bg-white">
                            <img
                                src={irrigation.image}
                                alt={irrigation.name}
                                className="w-full h-[240px] object-contain p-4 bg-white group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-lg font-semibold">
                                {irrigation.name}
                            </h2>

                            <p className="text-green-600 font-bold mt-2">
                                ₹ {irrigation.price}
                            </p>

                            <button
                                onClick={() =>
                                    addToCart({
                                        id: `${irrigation.id}-default`,
                                        name: irrigation.name,
                                        price: irrigation.price,
                                        image: irrigation.image,
                                        size: "Default",
                                        quantity: 1,
                                    })
                                }
                                className="mt-auto bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                            >        Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Irrigation;