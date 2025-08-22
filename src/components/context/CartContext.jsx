import { useState, createContext, useContext, useEffect, useRef } from "react";
import { addedToCartToast, alreadyInCartToast } from "../toasts/toasts";

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

  // setting items quantity to 1
  const [quantities, setQuantities] = useState({
    quantities: 1,
  });

  function setItemQuantity(itemId, quantity) {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  }

  // using useRef to display cart and order summary
  const cartRef = useRef(null);
  const isCartVisible = useRef(false);

  // Sync cart items to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItemsCount(cartItems.length);
  }, [cartItems]);

  // calculate total price
  const totalPrice = cartItems.reduce(
    (acc, currentItem) =>
      acc + currentItem.price * currentItem.quantities.quantities,
    0
  );


  // Add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        alreadyInCartToast();
        return prevItems;
      }
      
      // Add new products to cart
      addedToCartToast();
      cartRef.current.style.right = "0";
      isCartVisible.current = true;
      return [{ ...product, quantities: { quantities: 1 } }, ...prevItems];
    });
  };

  // remove from cart
  const removeFromCart = (itemId) => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems") || []);
    const updatedCart = storedCart.filter((item) => item.id !== itemId);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        quantities,
        setQuantities,
        setItemQuantity,
        cartRef,
        isCartVisible,
        cartItems,
        totalPrice,
        setCartItems,
        cartItemsCount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
