import { relatedProducts } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { newArrivals, topSelling } from "../assets/assets";
import { StarIcon } from "lucide-react";
import { useProduct } from "./ProductContext";

const RelatedProducts = () => {
  const navigate = useNavigate();
  const { product } = useProduct();

  if (!product) return null;

  const combinedProducts = [...topSelling, ...newArrivals];

  const related = combinedProducts.filter((p) => p._id !== product._id);

  function handleNavigation(productId) {
    navigate(`/shop/${productId}`);
    scrollTo(0, 0);
  }
  return (
    <section className="pt-[50px] pb-[178px] max-w-[1440px] mx-auto flex flex-col items-center lg:pt-[72px]">
      <p className="font-IntegralCF font-bold text-[24px] lg:text-[36px] text-center">
        You may also like
      </p>

      <div className="grid grid-cols-2 gap-[20px] lg:grid-cols-4">
        {related.slice(0, 4).map((r) => (
          <div className="flex flex-col gap-[10px] lg:gap-[16px] pt-[32px] lg:pt-[55px] overflow-hidden">
            <div className="bg-pearlGray cursor-pointer group h-[200.01px] lg:h-[298px] rounded-[20px]">
              <img
                src={r.image}
                alt={r.name}
                className="w-full group-hover:scale-x-105 transition duration-200 rounded-[20px] h-full object-contain"
                onClick={() => handleNavigation(r._id)}
              />
            </div>
            <div className="flex flex-col gap-[4px] pb-[24px] lg:pb-[36px] lg:gap-[8px]">
              <p className="font-bold font-satoshi text-[14px] lg:text-[16px]">
                {r.name}
              </p>
              {/* Stars + rating */}
              <div className="flex justify-between gap-[11px] lg:gap-[13px] w-[127px] lg:w-[150px] items-center">
                <div className="flex gap-[4.44px] lg:gap-[5.31px] items-center">
                  {Array.from({ length: r.stars }, (_, i) => (
                    <StarIcon
                      className="w-[15.49px] lg:w-[18.47px]"
                      fill="#FFC633"
                      stroke="#FFC633"
                      key={i}
                    />
                  ))}
                </div>
                <p className="font-satoshi text-[12px] lg:text-[14px]">
                  {r.ratings.toFixed(1)}/
                  <span className="text-[#00000099]">5</span>
                </p>
              </div>
              {/* Stars + rating end */}

              {/* Price */}
              <div className="flex items-center gap-[5px] lg:gap-[10px]">
                <p className="font-bold text-[16px] font-satoshi lg:text-[20px]">
                  ${r.price}
                </p>
                {r.oldPrice && (
                  <p className="font-bold text-[16px] text-[#00000066] line-through decoration-[#00000066] font-satoshi lg:text-[20px]">
                    ${r.oldPrice}
                  </p>
                )}
                {r.discount && (
                  <div className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
                    <p className="text-[10px] lg:text-[12px] font-satoshi font-medium text-[#FF3333]">
                      {r.discount}%
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
