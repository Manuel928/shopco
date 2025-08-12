import { useState, createContext, useContext, useEffect, useRef } from "react";

const CartContext = createContext();
export const useCartData = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  // fetching all cart items and storing it as the initial state
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse cartItems from localStorage", e);
      return [];
    }
  });

  // items count number that shows on the cart icon (navbar)
  const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);

  // using useRef to display cart and order summary
  const cartRef = useRef(null);
  const isCartVisible = useRef(false);

  // Sync cart items to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItemsCount(cartItems.length);
  }, [cartItems]);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItems = prevItems.find((item) => item.id === product.id);
      if (existingItems) return [...prevItems];
      return [product, ...prevItems];
    });
    // if (!isCartVisible.current && cartRef.current) {
    //   cartRef.current.style.right = '0';
    //   isCartVisible.current = true;
    // }
    cartRef.current.style.right = "0";
    isCartVisible.current = true;
  };

  return (
    <CartContext.Provider
      value={{
        cartRef,
        isCartVisible,
        cartItems,
        setCartItems,
        cartItemsCount,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
