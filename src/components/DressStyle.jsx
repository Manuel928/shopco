import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFilter from "../pages/categories/CategoriesPage";

const DressStyle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowMobileFilterOptions } = useFilter();
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="space-y-[20px] w-full">
      <div
        className="flex cursor-pointer justify-between duration-300 transition-all"
        onClick={handleToggle}
      >
        <p className="font-satoshi font-medium">Dress Style</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-[8px]">
          <Link
            onClick={() => setShowMobileFilterOptions(false)}
            className="flex items-center justify-between"
            to={"/category/casual"}
          >
            <p className="text-[15px] text-[#00000099] font-satoshi">Casual</p>
            <ChevronRight size={18} color="#00000099" />
          </Link>
          <Link
            onClick={() => setShowMobileFilterOptions(false)}
            className="flex items-center justify-between"
            to={"/category/formal"}
          >
            <p className="text-[15px] text-[#00000099] font-satoshi">Formal</p>
            <ChevronRight size={18} color="#00000099" />
          </Link>
          <Link
            onClick={() => setShowMobileFilterOptions(false)}
            className="flex items-center justify-between"
            to={"/category/party"}
          >
            <p className="text-[15px] text-[#00000099] font-satoshi">Party</p>
            <ChevronRight size={18} color="#00000099" />
          </Link>
          <Link
            onClick={() => setShowMobileFilterOptions(false)}
            className="flex items-center justify-between"
            to={"/category/gym"}
          >
            <p className="text-[15px] text-[#00000099] font-satoshi">Gym</p>
            <ChevronRight size={18} color="#00000099" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DressStyle;
