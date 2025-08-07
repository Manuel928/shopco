import { useState, createContext, useContext } from "react";
const CartContext = createContext();

export const useCartData = () => useContext(CartContext)
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
