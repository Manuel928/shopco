import { useState } from "react";
import { testimonial } from "../assets/assets";
import TestimonialCard from "./Cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

const Testimonial = () => {
  const [embla, setEmbla] = useState(null);
  return (
    <>
      <div className="flex flex-col pt-[50px] pb-[140px] lg:pb-[178px] overflow-visible lg:pt-[80px] max-w-[1440px] px-[16px] lg:px-[100px]">
        <div className="flex items-center justify-between">
          <p className="font-bold font-IntegralCF max-w-[286px] lg:max-w-full text-[24px] lg:text-[36px]">
            OUR HAPPY CUSTOMERS
          </p>
          <div className="flex gap-[16px]">
            <button
              onClick={() => embla && embla.scrollPrev()}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9.47px] transition"
            >
              <LucideArrowLeft className="h-5 w-5 text-green" />
            </button>
            <button
              onClick={() => embla && embla.scrollNext()}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9.47px] transition"
            >
              <LucideArrowRight className="h-5 w-5 text-green" />
            </button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setEmbla}
          className="mt-[24px] lg:mt-[40px]"
        >
          <CarouselContent>
            {testimonial.map((t) => (
              <CarouselItem key={t.text} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
