import { DeleteIcon, Trash2 } from "lucide-react";
import React from "react";
import Counter from "../../components/Counter";

const CartCard = ({ product }) => {
  return (
    <div className="w-full lg:w-[667px] h-full flex items-center justify-between">
      <div className="flex items-center gap-[16px]">
        <img
          src={product.image}
          className="w-[124px] h-[124px] rounded-[8.66px]"
          alt=""
          srcset=""
        />
        <div className="flex flex-col font-satoshi justify-between gap-[15px]">
          <div>
            <p className="text-nowrap text-[14px] lg:text-[18px] font-bold">
              {product.productName}
            </p>
            <p className="text-sm">
              Size: <span className="text-[#00000099]">{product.size}</span>
            </p>
            <p className="text-sm">
              Color: <span className="text-[#00000099]">{product.color}</span>
            </p>
          </div>
          <div className="font-bold">
            <p className="text-[20px] lg:text-[24px]">${product.price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end w-[225px] space-y-[56px] justify-between">
        <Trash2 color="red" size={22} />
        <Counter />
      </div>
    </div>
  );
};

export default CartCard;
