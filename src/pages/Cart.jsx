import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";
import "./Cart.css";

export function Cart() {
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);

  const discount = totalPrice * 0.1;

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

            <p>Total: {formatPrice(totalPrice)}</p>
            <p>You receive a 10 % discount: {formatPrice(discount)}</p>
            <h2>Total cost: {formatPrice(totalPrice - discount)}</h2>
          </div>
        )}
      </div>
    </>
  );
}
