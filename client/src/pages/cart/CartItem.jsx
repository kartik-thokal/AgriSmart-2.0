import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-700 p-6 flex gap-6 text-gray-900 dark:text-gray-100">

      {/* Product Image Placeholder */}
      <div className="w-32 h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>

      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p>Size: {item.size}</p>

        <p className="text-green-600 dark:text-green-400 font-bold mt-2">
          ₹{item.price}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 dark:text-red-400 ml-6 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;