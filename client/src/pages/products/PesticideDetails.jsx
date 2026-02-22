import { useCart } from '../../context/CartContext'

import { useParams } from "react-router-dom";
import { useState } from "react";
import PesticideData from "../../data/pesticideData";

import DeliveryChecker from "../../components/ui/DeliveryChecker";

function PesticideDetails() {

  const { addToCart } = useCart();          

  const { id } = useParams();
  const product = PesticideData.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0]
  );


  // cart logic
  const [count, setCount] = useState(1);

  function decreaseQuentity() {
    if (count > 1) {
      setCount(count => count - 1);
    }
  }

  function increaseQuentity() {
    setCount(count => count + 1);
  }


  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 text-gray-800 dark:text-gray-100">

      {/* TOP SECTION - Image + Cart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* IMAGE */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/40 p-8 flex justify-center transition">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[450px] object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/40 p-8 transition">

          <h1 className="text-2xl md:text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-green-600 dark:text-green-400 text-3xl font-bold mt-3">
            ₹{selectedSize?.price}
          </p>

          {/* SIZE SECTION */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-base text-gray-800 dark:text-gray-200">
              Select Size:
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes?.map((size, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`relative cursor-pointer rounded-lg border px-4 py-3 min-w-[120px] transition-all duration-200
                  ${selectedSize?.label === size.label
                      ? "border-green-600 bg-green-50 ring-1 ring-green-500 dark:bg-green-900/30 dark:border-green-500 dark:ring-green-400"
                      : "border-gray-300 bg-white hover:border-green-400 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-green-400"
                    }`}
                >
                  {/* Discount Badge */}
                  {size.discount && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-2 py-[2px] rounded-full font-medium shadow">
                      {size.discount}% OFF
                    </span>
                  )}

                  {/* Size */}
                  <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                    {size.label}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">
                      ₹{size.price}
                    </span>

                    {size.originalPrice && (
                      <span className="text-gray-400 dark:text-gray-500 line-through text-xs">
                        ₹{size.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Best Seller */}
                  {size.bestSeller && (
                    <p className="text-[10px] text-purple-600 dark:text-purple-400 font-medium mt-1">
                      ★ Best Seller
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>


          <DeliveryChecker />



          {/* QUANTITY + CART */}
          <div className="mt-8 flex items-center gap-4">

            {/* Quantity */}
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <button onClick={decreaseQuentity} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                -
              </button>
              <span className="px-4 bg-white dark:bg-gray-800">
                {count}
              </span>
              <button onClick={increaseQuentity} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                +
              </button>
            </div>



            {/* Add To Cart */}
            <button
              onClick={() =>
                addToCart({
                  id: `${product.id}-${selectedSize.label}`,
                  name: product.name,
                  image: product.image,
                  price: selectedSize.price,
                  size: selectedSize.label,
                  quantity: count,
                })
              }
              className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="mt-14 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/40 p-8 transition">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
          Product Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-gray-700 dark:text-gray-300">
          <div><strong>Category:</strong> Fertilizer</div>
          <div><strong>Brand:</strong>ABC</div>
          <div><strong>Availability:</strong> In Stock</div>
          <div><strong>Delivery:</strong> 3-5 Working Days</div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/40 p-8 transition">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
          Product Description
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          {product.description}
        </p>
      </div>

    </div>
  );
}

export default PesticideDetails;