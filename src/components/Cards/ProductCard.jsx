import { StarIcon } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-[10px] lg:gap-[16px] pt-[32px] lg:pt-[55px]">
      <div className="bg-pearlGray w-[198px] h-[200.01px] lg:w-[295px] lg:h-[298px] rounded-[20px] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-[4px] pb-[24px] lg:pb-[36px] lg:gap-[8px]">
        <p className="font-bold font-satoshi text-[12px] lg:text-[16px]">
          {product.name}
        </p>
        {/* Stars + rating */}
        <div className="flex justify-between gap-[11px] lg:gap-[13px] w-[127px] lg:w-[150px] items-center">
          <div className="flex gap-[4.44px] lg:gap-[5.31px] items-center">
            {Array.from({ length: product.stars }, (_, i) => (
              <StarIcon
                className="w-[15.49px] lg:w-[18.47px]"
                fill="#FFC633"
                stroke="#FFC633"
                key={i}
              />
            ))}
          </div>
          <p className="font-satoshi text-[12px] lg:text-[14px]">
            {(product.ratings).toFixed(1)}/<span className="text-[#00000099]">5</span>
          </p>
        </div>
        {/* Stars + rating end */}

        {/* Price */}
        <div className="flex items-center gap-[5px] lg:gap-[10px]">
          <p className="font-bold text-[16px] font-satoshi lg:text-[20px]">
            ${product.price}
          </p>
          {product.oldPrice && (
            <p className="font-bold text-[16px] text-[#8d8d8d66] line-through decoration-[#00000066] font-satoshi lg:text-[20px]">
              ${product.oldPrice}
            </p>
          )}
          {product.discount && (
            <div className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
              <p className="text-[10px] lg:text-[12px] font-satoshi font-medium text-[#FF3333]">
                {product.discount}%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
