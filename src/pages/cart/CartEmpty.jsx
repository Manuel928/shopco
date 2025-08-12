import { ShoppingBag } from "lucide-react";
import { useCartData } from "../../components/context/CartContext";

const CartEmpty = () => {
  const { isCartVisible, cartRef } = useCartData();
  return (
    <div className="max-w-[1440px] flex flex-col items-center justify-center space-y-[25px]">
      <h4 className="font-satoshi text-[16px] text-center">
        You do not currently have any items in your cart!
      </h4>
      <button
        onClick={() => {
          isCartVisible.current = false;
          if (cartRef.current) {
            cartRef.current.style.right = "-100%";
          }
        }}
        className="font-satoshi cursor-pointer flex items-center justify-between gap-2 border-2 shadow-xl border-black rounded-[10px] px-8 py-3 text-black"
      >
        <span>Shop now</span>
        <ShoppingBag width={20} />
      </button>
    </div>
  );
};

export default CartEmpty;
