import { Minus, Plus } from "lucide-react";
import { useCartData } from "./context/CartContext";
import { useEffect } from "react";

const Counter = ({ itemId }) => {
  const { quantities, setItemQuantity } = useCartData();
  const itemQuantity = quantities[itemId] || 1;

  function decrement() {
    setItemQuantity(itemId, Math.max(1, itemQuantity - 1));
  }

  function increment() {
    setItemQuantity(itemId, Math.min(30, itemQuantity + 1));
  }

  function handleOnChange(e) {
    const value = e.target.value;
    if (value === "") {
      setItemQuantity(itemId, "");
    } else {
      const num = Number(value);
      if (num >= 1 && num <= 30) {
        setItemQuantity(itemId, num);
      }
    }
  }

  // useEffect(() => {
  //   setItemQuantity(1, 1);
  // }, []);

  return (
    <div className="bg-softGray w-[110px] h-[44px] lg:w-[170px] lg:h-[52px] flex items-center justify-between rounded-[62px] py-[12px] px-[16px] lg:py-[16px] lg:px-[20px]">
      <button onClick={decrement}>
        <Minus className="w-4 lg:w-5" />
      </button>
      <input
        type="number"
        value={itemQuantity}
        onChange={handleOnChange}
        min={1}
        max={30}
        className="outline-none w-full text-center font-satoshi"
      />
      <button onClick={increment}>
        <Plus className="w-4 lg:w-5" />
      </button>
    </div>
  );
};

export default Counter;
