import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { ProductProvider } from "../components/context/ProductContext";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <ProductProvider>
        <Navbar />
      </ProductProvider>

      <main className="z-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
