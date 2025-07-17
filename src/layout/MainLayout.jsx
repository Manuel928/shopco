import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const MainLayout = ({ children }) => {
  return (
    <>
      
      <main className="max-w-[1440px] px-[16px] lg:px-[100px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
