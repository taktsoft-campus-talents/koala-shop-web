import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  // I propose to have a single context for all global values
  // like user login data, special offers, cart, etc

  const [cartItems, setCartItems] = useState([
    { id: 2, title: "Computer 1", price: 21300, quantity: 5 },
    { id: 3, title: "Laptop Test 2", price: 5000, quantity: 1 },
  ]);

  const addProductToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
