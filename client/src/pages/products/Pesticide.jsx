import { Link } from "react-router-dom";
import pesticideData from "../../data/pesticideData";
import { useCart } from '../../context/CartContext'
function Seeds() {
  const { addToCart } = useCart();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Pesticide</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pesticideData.map((pesticide) => (
          <div
            key={pesticide.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-[400px] flex flex-col"          >
            <Link to={`/pesticide/${pesticide.id}`}>
              <img
                src={pesticide.image}
                alt={pesticide.name}
                className="w-full h-[240px] object-cover"
              />
            </Link>

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">
                {pesticide.name}
              </h2>

              <p className="text-green-600 font-bold mt-2">
                ₹ {pesticide.price}
              </p>

              <button
                onClick={() =>
                  addToCart({
                    id: `${pesticide.id}-default`,
                    name: pesticide.name,
                    price: pesticide.price,
                    image: pesticide.image,
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

export default Seeds;