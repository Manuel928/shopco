import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import BrowseByDressStyle from "../components/BrowseByDressStyle";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
