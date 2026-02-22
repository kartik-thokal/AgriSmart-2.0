import { useCart } from "../../context/CartContext";

function OrderSummary() {
  const { totalAmount } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">
        Order Summary
      </h2>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>₹{totalAmount}</span>
      </div>

      <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default OrderSummary;