import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatPrice } from "../utils/utils";
import { useEffect, useState } from "react";
import "./Cart.css";

export function Cart() {
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const { user, login } = useContext(UserContext);
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const updateUserData = async () => {
      try {
        await login(user.name);
      } catch (err) {
        console.log(err);
      } finally {
        setIsUserUpdated(true);
      }
      await login(user.name);
    };
    if (user && !isUserUpdated) {
      updateUserData();
    }
  }, [isUserUpdated, user, login]);

  const discount = user?.discount ? totalPrice * 0.1 : 0;

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

            <p className="total">Total: {formatPrice(totalPrice)}</p>
            {user?.discount && (
              <>
                <p>You receive a 10 % discount</p>
                <h2>Total cost: {formatPrice(totalPrice - discount)}</h2>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
