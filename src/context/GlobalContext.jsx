import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  // I propose to have a single context for all global values
  // like user login data, special offers, cart, etc

  const [userCart, setUserCart] = useState([
    { productId: 2, productName: "adas", productPrice: 21300, quantity: 5 },
  ]);
  // userCart has to be an array of the following records:
  // { productId, productName, productPrice, quantity }

  const addProductToCart = (product) => {
    const { title, price } = product;
    setUserCart([
      ...userCart,
      { title, price, quantity: userCart.quantity + 1 },
    ]);
  };

  return (
    <GlobalContext.Provider
      value={{
        userCart,
        addProductToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
