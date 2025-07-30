import { CheckIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { isColorLight } from "../lib/isColorLight";

const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];

const ProductColors = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const handleShowCheckMark = (index) => {
    setSelectedColorIndex(index);
  };

  return (
    <div className="space-y-[20px] w-full">
      <div
        className="flex cursor-pointer justify-between duration-300 transition-all"
        onClick={handleToggle}
      >
        <p className="font-satoshi font-medium">Colors</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div className="grid gap-[15.5px] grid-cols-7 lg:grid-cols-5 justify-between">
          {colors.map((color, i) => {
            const isLight = isColorLight(color)
            return (
              <div
                onClick={() => handleShowCheckMark(i)}
                style={{ backgroundColor: color }}
                key={i}
                className="w-[37px] h-[37px] border border-[#00000033] flex items-center justify-center hover:scale-105 duration-300 rounded-full cursor-pointer"
              >
                {selectedColorIndex === i && (
                  <CheckIcon size={18} color={isLight ? "black" : "white"} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductColors;
