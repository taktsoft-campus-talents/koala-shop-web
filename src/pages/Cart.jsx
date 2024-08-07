import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";
import "./Cart.css";

export function Cart() {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <>
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <h4>Product: {item.title}</h4>
                  <p>Price: {formatPrice(item.price)}</p>
                  <p>Quantity: {item.quantity} </p>
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
