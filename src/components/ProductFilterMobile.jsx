import { images } from "../assets/assets";
import PriceAccordion from "./PriceAccordion";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";
import DressStyle from "./DressStyle";
import Button from "./Buttons/Button";

const ProductFilterMobile = () => {
  return (
    <div className="lg:hidden flex flex-col gap-[24px] h-full pb-[29px] w-full">
      <div className="space-y-[24px] pt-[20px]">
        {/* Clothes selection */}
        <hr className="text-[#0000001A]" />
        <PriceAccordion />
        <hr className="text-[#0000001A]" />
        <ProductColors />
        <hr className="text-[#0000001A]" />
        <ProductSizes />
        <hr className="text-[#0000001A]" />
        <DressStyle />
        <Button
          text={"Apply Filter"}
          backgroundColor="black"
          textcolor="white"
          width="w-full"
          height="h-[48px]"
        ></Button>
      </div>
    </div>
  );
};

export default ProductFilterMobile;
