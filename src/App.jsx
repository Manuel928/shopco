import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CategoriesPage from "./pages/categories/CategoriesPage";
import Shop from "./pages/Shop";
import Category from "./pages/categories/Category";
import YourCart from "./pages/cart/YourCart";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:category" element={<CategoriesPage />} />
      {/* <Route path="/cart" element={<YourCart />} /> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
