import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/shop/${product?.id}`);
    scrollTo(0, 0);
  }
  return (
    <div className="flex flex-col gap-[10px] lg:gap-[16px] h-full pt-[32px] lg:pt-[55px] overflow-visible">
      <div className="bg-pearlGray cursor-pointer group lg:h-[298px] rounded-[20px]">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="group-hover:scale-x-105 transition h-full w-full duration-200 rounded-[20px] object-cover"
          onClick={handleNavigation}
        />
      </div>
      <div className="flex flex-col gap-[4px] pb-[24px] lg:pb-[36px] lg:gap-[8px]">
        <p className="font-bold font-satoshi text-[14px] lg:text-[16px]">
          {product?.title}
        </p>
        {/* Stars + rating */}
        <div className="flex justify-between gap-[11px] lg:gap-[13px] w-[127px] lg:w-[150px] items-center">
          <div className="flex gap-[4.44px] lg:gap-[5.31px] items-center">
            {Array.from({ length: product.rating }, (_, i) => (
              <StarIcon
                className="w-[15.49px] lg:w-[18.47px]"
                fill="#FFC633"
                stroke="#FFC633"
                key={i}
              />
            ))}
          </div>
          <p className="font-satoshi text-[12px] lg:text-[14px]">
            {product.rating} /<span className="text-[#00000099]">5</span>
          </p>
        </div>
        {/* Stars + rating end */}

        {/* Price */}
        <div className="flex items-center gap-[5px] lg:gap-[10px]">
          <p className="font-bold text-[16px] font-satoshi lg:text-[20px]">
            ${product.price}
          </p>
          {product.discountPercentage && (
            <div className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
              <p className="text-[10px] lg:text-[12px] font-satoshi font-medium text-[#FF3333]">
                -{product.discountPercentage}%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
