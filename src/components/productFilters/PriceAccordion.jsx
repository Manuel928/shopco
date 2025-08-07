import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";

const PriceAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="space-y-[20px] w-full">
      <div className="flex cursor-pointer justify-between duration-300 transition-all" onClick={handleToggle}>
        <p className="font-satoshi font-medium">Price</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <PriceRangeSlider />
      )}
    </div>
  );
};

export default PriceAccordion;
