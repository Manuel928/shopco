import Hero from "../components/Hero";
import Partners from "../components/Partners";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import BrowseByDressStyle from "../components/BrowseByDressStyle";
import Testimonial from "../components/Testimonial";
import FetchAllProducts from "../components/context/FetchAllProducts";

const Home = () => {
  return (
    <>
      <FetchAllProducts>
        <Hero />
        <Partners />
        <NewArrivals />
        <TopSelling />
        <BrowseByDressStyle />
        <Testimonial />
      </FetchAllProducts>
    </>
  );
};

export default Home;
