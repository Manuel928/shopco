import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CategoriesPage from "./pages/categories/CategoriesPage";
import Shop from "./pages/Shop";
import Category from "./pages/categories/Category";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<CategoriesPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
