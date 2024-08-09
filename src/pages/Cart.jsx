import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";
import "./Cart.css";

export function Cart() {
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);
  return (
    <>
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="cart-page">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <h4>Product: {item.title}</h4>
                  <p>Price: {formatPrice(item.price)}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h2>Total: {formatPrice(totalPrice)}</h2>
          </div>
        )}
      </div>
    </>
  );
}
