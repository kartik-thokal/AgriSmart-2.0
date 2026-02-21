import { useCart } from "../context/CartContext";
import CartItem from "../pages/cart/CartItem";
import OrderSummary from "../pages/cart/OrderSummary"

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;