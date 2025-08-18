import { useEffect, useState } from "react";
import ProductCard from "./Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Button from "./Buttons/Button";
import axios from "axios";
import { useLoading } from "./context/LoadingSpinnerContext";
import GlobalLoader from "./GlobalLoader";
import { useNavigate } from "react-router-dom";

const TopSelling = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const { isLoading, setIsLoading } = useLoading();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  function handleNavigate() {
    navigate("/shop");
  }
  return (
    <section className="pt-[50px] max-w-[1440px] mx-auto flex flex-col items-center lg:pt-[72px] px-[16px] lg:px-[100px]">
      <p className="font-IntegralCF font-bold text-[24px] mb-[25px] lg:mb-[55px] lg:text-[36px] text-center">
        Top Selling
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-[24px] lg:pb-[36px]"
      >
        <CarouselContent>
          {products?.slice(16, 20).map((product) => (
            <CarouselItem
              key={product?.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              {isLoading ? <GlobalLoader /> : <ProductCard product={product} />}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Button
        onClick={handleNavigate}
        text="View more"
        align="self-center"
        backgroundColor="white"
        border="softGray"
        textcolor="black"
      ></Button>
    </section>
  );
};

export default TopSelling;
