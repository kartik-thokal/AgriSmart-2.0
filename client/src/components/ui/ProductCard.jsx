const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>

        <p className="text-green-600 font-bold mt-2">
          ₹{product.price}
        </p>

        <button className="mt-4 w-full bg-green-600 text-black py-2 rounded-xl font-medium hover:bg-green-500 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
