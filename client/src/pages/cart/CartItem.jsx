import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-6 flex gap-6">

      <div className="w-32 h-32 bg-gray-100 rounded-lg"></div>

      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p>Size: {item.size}</p>

        <p className="text-green-600 font-bold mt-2">
          ₹{item.price}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 ml-6"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;