import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import CategoriesPage from "./pages/CategoriesPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="max-w-[1440px] mx-auto">
      <ScrollToTop/>
      <Topbar />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Category />} />
        <Route path="/shop/:category/:type" element={<ProductType />} /> */}
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoriesPage />} />
        {/* <Route path="/related/:id" element={<ProductDetails />} /> */}
        {/* <Route path="/shop/:id/relatedProducts/:id" element={<ProductDetails />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
