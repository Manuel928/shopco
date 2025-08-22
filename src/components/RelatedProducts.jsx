import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";
import { useFetchAllProducts } from "./context/FetchAllProducts";
import { useProduct } from "./context/ProductContext";
import ImageWithSkeleton from "./ImageWithSkeleton";

const RelatedProducts = () => {
  const navigate = useNavigate();
  const { allProducts } = useFetchAllProducts();
  const { product } = useProduct();

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const relatedProducts =
    allProducts?.filter((related) => related?.id !== product?.id) || [];

  const shuffledProducts = shuffle(relatedProducts);

  function handleNavigation(id) {
    navigate(`/shop/${id}`);
    scrollTo(0, 0);
  }
  return (
    <section className="pt-[50px] pb-[178px] max-w-[1440px] mx-auto flex flex-col items-center lg:pt-[72px]">
      <p className="font-IntegralCF font-bold text-[24px] lg:text-[36px] text-center">
        You may also like
      </p>

      <div className="grid grid-cols-2 gap-[20px] lg:grid-cols-4">
        {shuffledProducts?.slice(0, 4)?.map((r) => (
          <div className="flex flex-col gap-[10px] lg:gap-[16px] pt-[32px] lg:pt-[55px] overflow-hidden">
            <div className="bg-pearlGray cursor-pointer group h-[200.01px] lg:h-[298px] rounded-[20px]">
              <ImageWithSkeleton
                src={r?.thumbnail}
                alt={r?.title}
                onClick={() => handleNavigation(r.id)}
                className="w-full group-hover:scale-x-105 transition duration-200 rounded-[20px] h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-[4px] pb-[24px] lg:pb-[36px] lg:gap-[8px]">
              <p className="font-bold truncate font-satoshi text-[14px] lg:text-[16px]">
                {r.title}
              </p>
              {/* Stars + rating */}
              <div className="flex justify-between gap-[11px] lg:gap-[13px] w-[127px] lg:w-[150px] items-center">
                <div className="flex gap-[4.44px] lg:gap-[5.31px] items-center">
                  {Array.from({ length: r.rating }, (_, i) => (
                    <StarIcon
                      className="w-[15.49px] lg:w-[18.47px]"
                      fill="#FFC633"
                      stroke="#FFC633"
                      key={i}
                    />
                  ))}
                </div>
                <p className="font-satoshi text-[12px] lg:text-[14px]">
                  {r.rating}/<span className="text-[#00000099]">5</span>
                </p>
              </div>
              {/* Stars + rating end */}

              {/* Price */}
              <div className="flex items-center gap-[5px] lg:gap-[10px]">
                <p className="font-bold text-[16px] font-satoshi lg:text-[20px]">
                  ${r.price}
                </p>
                {r.discountPercentage && (
                  <p className="font-bold text-[16px] text-[#00000066] line-through decoration-[#00000066] font-satoshi lg:text-[20px]">
                    ${r.discountPercentage}
                  </p>
                )}
                {r.discountPercentage && (
                  <div className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
                    <p className="text-[10px] lg:text-[12px] font-satoshi font-medium text-[#FF3333]">
                      {r.discountPercentage}%
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-[24px] lg:pb-[36px]"
      >
        <CarouselContent>
          {related.map((relatedProduct) => (
            <CarouselItem
              key={relatedProduct.text}
              className="basis-1/2 md:basis-1/2 lg:basis-1/4"
            >
              <ProductCard product={relatedProduct} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </section>
  );
};

export default RelatedProducts;
