import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { newArrivals, topSelling } from "../assets/assets";

const Counter = () => {
  const [itemCount, setItemCount] = useState(1);
  const {id} = useParams()

  const getPrice = async () => {
    const combinedPrice = [...topSelling, ...newArrivals]
  }
  function decrement() {
    if (itemCount > 1) {
      setItemCount((itemCount) => itemCount - 1);
    }
  }
  function increment() {
    setItemCount((itemCount) => itemCount + 1);
  }

  return (
    <div className="bg-softGray w-[110px] h-[44px] lg:w-[170px] lg:h-[52px] items-center justify-between flex rounded-[62px] py-[12px] px-[16px] lg:py-[16px] lg:px-[20px]">
      <button onClick={decrement}>
        <Minus className="w-4 lg:w-8" />
      </button>
      <input type="number" value={itemCount} className="outline-none w-full text-center font-satoshi" />
      <button onClick={increment}>
        <Plus className="w-4 lg:w-8" />
      </button>
    </div>
  );
};

export default Counter;
