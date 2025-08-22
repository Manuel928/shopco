import { useEffect, useState } from "react";
import ProductCard from "./Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Button from "./Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useFetchAllProducts } from "./context/FetchAllProducts";

const NewArrivals = () => {
  const navigate = useNavigate();
  const { allProducts } = useFetchAllProducts();

  function handleNavigate() {
    navigate("/shop");
  }

  return (
    <section
      id="newArrivals"
      className="pt-[50px] max-w-[1440px] mx-auto flex flex-col items-center lg:pt-[72px] px-[16px] lg:px-[100px]"
    >
      <p className="font-IntegralCF font-bold text-[24px] mb-[25px] lg:mb-[55px] lg:text-[36px] text-center">
        New Arrivals
      </p>

      {allProducts?.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full pb-[24px] lg:pb-[36px]"
        >
          <CarouselContent>
            {allProducts?.slice(0, 4).map((product) => (
              <CarouselItem
                key={product?.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 items-center"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <p className="font-satoshi pt-3">No new arrivals available.</p>
      )}

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

export default NewArrivals;
