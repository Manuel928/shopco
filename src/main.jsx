import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./components/context/LoadingSpinnerContext.jsx";
import CartProvider from "./components/context/CartContext.jsx";
import YourCart from "./pages/cart/YourCart.jsx";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <CartProvider>
      <YourCart />
      <App />
    </CartProvider>
  </LoadingProvider>
);
