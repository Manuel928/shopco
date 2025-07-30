import { images } from "../assets/assets";
import Button from "./Buttons/Button";
import DressStyle from "./DressStyle";
import PriceAccordion from "./PriceAccordion";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";

const ProductFilter = () => {
  return (
    <>
      <aside className="hidden lg:flex flex-col gap-[24px] h-full pb-[29px] bg-white border border-pearlGray rounded-[20px] w-[390px] lg:w-[295px]">
        <div className="px-[24px] space-y-[24px] pt-[20px]">
          <div className="flex items-center justify-between">
            <p>Filters</p>
            <img
              onClick={() => setShowMobileFilterOptions(true)}
              src={images.FilterIcon}
              className="rounded-[62px] cursor-pointer object-cover"
              alt=""
              srcset=""
            />
          </div>
          <hr className="text-[#0000001A]" />

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
            width="w-[247px]"
            height="h-[48px]"
          ></Button>
        </div>
      </aside>
    </>
  );
};

export default ProductFilter;
