import React from "react";
import ProductCard from "../Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Button from "../Buttons/Button";

const ProductsBlock = ({ heading, products }) => {
  return (
    <section className="pt-[50px] max-w-[1440px] mx-auto flex flex-col items-center lg:pt-[72px] px-[16px] lg:px-[100px]">
      <p className="font-IntegralCF font-bold text-[24px] lg:text-[36px] text-center">
        {heading}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-[24px] lg:pb-[36px]"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.text}
              className="basis-1/2 md:basis-1/2 lg:basis-1/4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Button
        text="View all"
        backgroundColor="white"
        border="softGray"
        textcolor="black"
      ></Button>
    </section>
  );
};

export default ProductsBlock;
