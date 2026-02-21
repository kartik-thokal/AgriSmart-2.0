import { Link } from "react-router-dom";
import seedsData from "../../data/seedsData";
import {useCart } from '../../context/CartContext'
function Seeds() {
    const { addToCart } = useCart();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Seeds</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {seedsData.map((seed) => (
    <div
      key={seed.id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-[400px] flex flex-col"
    > 
      <Link to={`/seeds/${seed.id}`}>
        <img
          src={seed.image}
          alt={seed.name}
          className="w-full h-[240px] object-cover"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold">
          {seed.name}
        </h2>

        <p className="text-green-600 font-bold mt-2">
          ₹ {seed.price}
        </p>

          <button
                onClick={() =>
                  addToCart({
                    id: `${seed.id}-default`,
                    name: seed.name,
                    price: seed.price,
                    image: seed.image,
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