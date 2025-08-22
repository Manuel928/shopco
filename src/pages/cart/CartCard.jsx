import { DeleteIcon, Trash2 } from "lucide-react";
import React from "react";
import Counter from "../../components/Counter";
import { useCartData } from "../../components/context/CartContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCartData();
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-start gap-[16px]">
        <img
          loading="lazy"
          src={product.thumbnail}
          className="w-[124px] bg-softGray h-full rounded-[8.66px]"
          alt=""
          srcset=""
        />
        <div className="flex flex-col font-satoshi justify-between gap-[25px] max-w-[99px] lg:max-w-[227px]">
          <div>
            <p className="text-[14px] truncate lg:text-[18px] font-bold">
              {product.title}
            </p>
            <p className="text-sm">
              Size: <span className="text-[#00000099]">{product.size}</span>
            </p>
            <p className="text-sm">
              Color: <span className="text-[#00000099]">{product.color}</span>
            </p>
          </div>
          <div className="font-bold">
            <p className="text-[18px] lg:text-[24px]">${product.price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end space-y-[56px] justify-between">
        <Trash2
          onClick={() => removeFromCart(product.id)}
          className="cursor-pointer"
          color="red"
          size={22}
        />
        <Counter itemId={product.id} />
      </div>
    </div>
  );
};

export default CartCard;
