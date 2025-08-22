import React, { useEffect, useMemo, useState } from "react";
import Button from "./Buttons/Button";
import Counter from "./Counter";
import { CheckIcon, StarIcon } from "lucide-react";
import { useProduct } from "./context/ProductContext";
import { useCartData } from "./context/CartContext";
import colors from "./productFilters/Colors";
import isColorLight from "../lib/isColorLight";

const ItemDetails = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const { product } = useProduct();
  const { quantities, cartItemsCount, addToCart } = useCartData();

  const itemToAddToCart = useMemo(() => {
    if (!product) return null;
    const { id, thumbnail, price, discountPercentage, title } = product;
    return {
      id: id,
      thumbnail: thumbnail,
      price: price,
      discountPercentage: discountPercentage,
      title: title,
      quantities: quantities,
    };
  }, [product]);

  function handleAddToCart() {
    // console.log(cartItemsCount);

    addToCart(itemToAddToCart);
  }
  const handleShowCheckMark = (index) => {
    setSelectedColorIndex(index);
  };
  return (
    <div className="space-y-[20px] mt-[8px] lg:mt-0 order-3">
      <div className="space-y-[12px] lg:space-y-[14px]">
        <p className="font-IntegralCF font-bold text-[24px] lg:text-[36px]">
          {product?.title}
        </p>

        {/* Ratings */}
        <div className="flex justify-between gap-[11px] lg:gap-[13px] w-[127px] lg:w-[150px] items-center">
          <div className="flex gap-[4.44px] lg:gap-[5.31px] items-center">
            {Array.from({ length: product?.rating }, (_, i) => (
              <StarIcon
                className="w-[15.49px] lg:w-[18.47px]"
                fill="#FFC633"
                stroke="#FFC633"
                key={i}
              />
            ))}
          </div>
          <p className="font-satoshi text-[12px] lg:text-[14px]">
            {product?.rating}/<span className="text-[#00000099]">5</span>
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-[5px] lg:gap-[10px]">
          <p className="font-bold text-[16px] font-satoshi lg:text-[20px]">
            ${product?.price}
          </p>
          {product?.discountPercentage && (
            <div className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
              <p className="text-[10px] lg:text-[12px] font-satoshi font-medium text-[#FF3333]">
                -{product?.discountPercentage}%
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[#00000099] font-satoshi max-w-[590px] text-[14px] lg:text-[16px]">
        {product?.description}
      </p>

      <hr className="text-[#0000001A]" />
      {/* Select colors */}
      <div className="flex flex-col gap-2">
        <p className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px]">
          Select colors
        </p>
        <div className="flex gap-[15.5px] items-center">
          {colors.slice(3, 6).map((color, i) => {
            const isLight = isColorLight(color);
            return (
              <div
                onClick={() => handleShowCheckMark(i)}
                style={{ backgroundColor: color }}
                key={i}
                className="w-[27px] h-[27px] border border-[#00000033] flex items-center justify-center hover:scale-105 duration-300 rounded-full cursor-pointer"
              >
                {selectedColorIndex === i && (
                  <CheckIcon size={14} color={isLight ? "black" : "white"} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="text-[#0000001A]" />

      {/* Choose size */}
      <div className="flex flex-col gap-2">
        <p className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px]">
          Choose size
        </p>
        <div className="flex gap-4 max-w-[420px]">
          <Button
            height="h-[39px] lg:h-[46px]"
            width="w-[74px] lg:w-[86px]"
            backgroundColor="gray"
            textcolor="gray"
            text={"Small"}
            additionalClasses="text-sm"
            border="softGray"
          />
          <Button
            height="h-[39px] lg:h-[46px]"
            width="w-[74px] lg:w-[86px]"
            backgroundColor="gray"
            textcolor="gray"
            text={"Medium"}
            additionalClasses="text-sm"
            border="softGray"
          />
          <Button
            height="h-[39px] lg:h-[46px]"
            width="w-[74px] lg:w-[86px]"
            backgroundColor="gray"
            textcolor="gray"
            text={"Large"}
            additionalClasses="text-sm"
            border="softGray"
          />
          <Button
            height="h-[39px] lg:h-[46px]"
            width="w-[74px] lg:w-[86px]"
            backgroundColor="gray"
            textcolor="gray"
            text={"X-Large"}
            additionalClasses="text-sm"
            border="softGray"
          />
        </div>
      </div>
      <hr className="text-[#0000001A]" />
      <div className="flex items-center justify-between gap-[12px] lg:gap-[20px] mb-[50px] lg:mb-[80px]">
        <Counter />

        {/* Add to cart and Proceed to checkout button */}
        <div className="space-y-4 w-full flex flex-col items-center lg:items-end">
          <button
            onClick={handleAddToCart}
            className="h-[44px] lg:h-[52px] w-[236px] lg:w-[400px] bg-black text-white font-satoshi border border-black cursor-pointer text-center transition duration-300 rounded-[62px]"
          >
            Add to Cart
          </button>
          {/* {cartItemsCount >= 1 && (
            <button
              onClick={()=> navigate("/cart")}
              className="h-[44px] lg:h-[52px] w-[236px] lg:w-[400px] text-black font-satoshi border border-black shadow-xl cursor-pointer text-center transition duration-300 rounded-[62px]"
            >
              Proceed to Checkout
            </button>
          )} */}
        </div>

        {/* Add to cart and Proceed to checkout button end */}
      </div>
    </div>
  );
};

export default ItemDetails;
