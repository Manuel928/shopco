import { CheckIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Button from "./Buttons/Button";

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const ProductSizes = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="space-y-[20px] w-full">
      <div
        className="flex cursor-pointer justify-between duration-300 transition-all"
        onClick={handleToggle}
      >
        <p className="font-satoshi font-medium">Size</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div className="flex flex-wrap gap-[8px]">
          {Array.from({ length: sizes.length }, (_, i) => (
            // <div
            //   onClick={() => handleShowCheckMark}
            //   style={{ backgroundColor: colors[i] }}
            //   key={i}
            //   className="w-[37px] h-[37px] border border-[#00000033] flex items-center justify-center hover:scale-105 duration-300 rounded-full"
            // >
            //   {showCheckMark ? <CheckIcon size={18} color="white" /> : ""}
            // </div>
            <Button backgroundColor="white" additionalClasses="text-sm" width="w-[96px]" height="h-[39px]" textcolor="black" border="softGray" text={sizes[i]}></Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSizes;
