import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Navbar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
