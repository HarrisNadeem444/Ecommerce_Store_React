import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/CartCheckout/CartAction";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>;
  }

  const removeItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 border-b border-gray-300"
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-gray-500">Price: ${item.price}</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">Quantity: {item.quantity}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:text-red-800 cursor-pointer"
            >
              Remove from Cart
            </button>
          </div>
          <br />
          <h2 className="text-2xl font-semibold mb-4">
            Total Price: {item.quantity * item.price}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
