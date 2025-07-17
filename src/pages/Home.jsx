import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import BrowseByDressStyle from "../components/BrowseByDressStyle";

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Partners />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
    </>
  );
};

export default Home;
