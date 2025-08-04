import { Breadcrumb } from "antd";
import { ArrowRight, TagIcon } from "lucide-react";
import { cart } from "../../assets/assets";
import CartCard from "./CartCard";
import { ProductProvider } from "../../components/ProductContext";

const YourCart = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto mb-[178px] px-[16px] lg:px-[100px]">
        <div className="space-y-[24px]">
          <Breadcrumb />
          <h1 className="font-IntegralCF font-bold text-[24px] lg:text-[36px]">
            YOUR CART
          </h1>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-[20px]">
            <div className="w-full lg:w-[715px] space-y-[24px] p-[24px] border border-softGray rounded-[20px]">
              <ProductProvider>
                {cart.map((c) => (
                  <>
                    <CartCard product={c} key={c.productName} />
                    <hr className="text-[#0000001A]" />
                  </>
                ))}
              </ProductProvider>
            </div>

            {/* Order Summary */}
            <div className="h-full rounded-[20px] border w-full lg:w-[505px] p-[24px] font-satoshi border-softGray">
              <div className="space-y-[24px]">
                <p className="font-bold">Order Summary</p>
                <div className="flex flex-col gap-[20px]">
                  <div className="flex items-center justify-between">
                    <p>Subtotal</p>
                    <p className="font-bold">$565</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Discount (-20%)</p>
                    <p className="text-cherryRed font-bold">$-113</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Delivery Fee</p>
                    <p className="font-bold">$15</p>
                  </div>
                  <hr className="text-[#0000001A]" />
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Total</p>
                    <p className="font-bold">$573</p>
                  </div>

                  <div className="flex items-center justify-between gap-[12px]">
                    <div className="flex items-center bg-[#F0F0F0] rounded-[62px]">
                      <TagIcon className="text-[#00000066] w-5 h-5 ml-4" />
                      <input
                        className="bg-transparent h-[48px] placeholder:font-satoshi px-2 focus:outline-none text-sm w-[218px] lg:w-[326px]"
                        placeholder="Add promo code..."
                      />
                    </div>

                    <button className="bg-black text-white rounded-[62px] h-[44px] lg:h-[52px] w-[236px] lg:w-[400px] text-center transition cursor-pointer duration-300 ">
                      Apply
                    </button>
                  </div>
                  <button className="bg-black font-satoshi flex items-center justify-center gap-[12px] text-white rounded-[62px] h-[44px] lg:h-[52px] w-full text-center transition cursor-pointer duration-300 ">
                    Go to checkout{" "}
                    <span>
                      <ArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCart;
