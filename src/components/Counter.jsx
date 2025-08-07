import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useProduct } from "./context/ProductContext";

const Counter = () => {
  const [itemCount, setItemCount] = useState(1);
  const { product } = useProduct();

  useEffect(() => {
    setItemCount(1);
  }, [product]);

  function decrement() {
    if (itemCount > 1) {
      setItemCount((prev) => prev - 1);
    }
  }
  function increment() {
    if (itemCount < 10) {
      setItemCount((prev) => prev + 1);
    }
  }

  return (
    <div className="bg-softGray w-[110px] h-[44px] lg:w-[170px] lg:h-[52px] items-center justify-between flex rounded-[62px] py-[12px] px-[16px] lg:py-[16px] lg:px-[20px]">
      <button onClick={decrement}>
        <Minus className="w-4 lg:w-8" />
      </button>
      <input
        type="number"
        value={itemCount}
        className="outline-none w-full text-center font-satoshi"
      />
      <button onClick={increment}>
        <Plus className="w-4 lg:w-8" />
      </button>
    </div>
  );
};

export default Counter;
