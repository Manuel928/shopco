import { useEffect, useState } from "react";
import TestimonialCard from "./Cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { useLoading } from "./context/LoadingSpinnerContext";
import GlobalLoader from "./GlobalLoader";
import axios from "axios";

const Testimonial = () => {
  const [embla, setEmbla] = useState(null);
  const [testimonials, setTestimonials] = useState();
  const { isLoading, setIsLoading } = useLoading();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const getTestimonials = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/products`);
      const allReviews = response.data.products.flatMap((p) => p.reviews);

      setTestimonials(allReviews);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <>
      <div className="flex flex-col pt-[50px] pb-[140px] lg:pb-[178px] overflow-visible lg:pt-[80px] max-w-[1440px] px-[16px] lg:px-[100px]">
        <div className="flex items-center justify-between">
          <p className="font-bold font-IntegralCF max-w-[286px] md:max-w-full text-[24px] lg:text-[36px]">
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
            {testimonials?.slice(0, 8).map((t) => (
              <CarouselItem key={t.text} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={t} key={t.reviewerName} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
