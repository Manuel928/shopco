import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import { newArrivals, topSelling } from "../assets/assets";
import { StarIcon } from "lucide-react";
import Button from "../components/Buttons/Button";
import Counter from "../components/Counter";
import Tabs from "../components/Tabs";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation()

  // console.log(location);
  

  const getProduct = async () => {
    const combinedProducts = [...topSelling, ...newArrivals];
    const foundProduct = combinedProducts.find((product) => product._id === id);
    setProduct(foundProduct);
  };
  

  useEffect(() => {
    getProduct();
  }, [id]);
  return product ? (
    <div className="max-w-[1440px] px-[16px] lg:px-[100px]">
      <Breadcrumb />

      <div className="flex flex-col mt-[36px] h-full lg:items-start lg:flex-row gap-y-[12px] gap-x-[40px]">
        {/* Cloth images */}
        <div className="order-2 lg:order-1 grid grid-cols-3 gap-x-[12px] gap-y-[14px] lg:flex lg:flex-col">
          {product.covers.map((cover) => (
            <img className="w-full" src={cover} alt="" srcset="" />
          ))}
        </div>
        {/* Selected Image */}
        <img
          src={product.image}
          className="object-fit order-1 lg:order-2"
          alt=""
        />

        {/* Details */}
        <div className="space-y-[20px] mt-[8px] lg:mt-0 order-3">
          <div className="space-y-[12px] lg:space-y-[14px]">
            <p className="font-IntegralCF w-[267px] lg:w-full font-bold text-[24px] lg:text-[36px]">
              {product.name}
            </p>

            {/* Ratings */}
            <div className="flex justify-between gap-[11px] lg:gap-[13px] w-[127px] lg:w-[150px] items-center">
              <div className="flex gap-[4.44px] lg:gap-[5.31px] items-center">
                {Array.from({ length: product.stars }, (_, i) => (
                  <StarIcon
                    className="w-[15.49px] lg:w-[18.47px]"
                    fill="#FFC633"
                    stroke="#FFC633"
                    key={i}
                  />
                ))}
              </div>
              <p className="font-satoshi text-[12px] lg:text-[14px]">
                {product.ratings.toFixed(1)}/
                <span className="text-[#00000099]">5</span>
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-[5px] lg:gap-[10px]">
              <p className="font-bold text-[16px] font-satoshi lg:text-[20px]">
                ${product.price}
              </p>
              {product.oldPrice && (
                <p className="font-bold text-[16px] text-[#00000066] line-through decoration-[#00000066] font-satoshi lg:text-[20px]">
                  ${product.oldPrice}
                </p>
              )}
              {product.discount && (
                <div className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
                  <p className="text-[10px] lg:text-[12px] font-satoshi font-medium text-[#FF3333]">
                    {product.discount}%
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[#00000099] font-satoshi max-w-[590px] text-[14px] lg:text-[16px]">
            {product.description}
          </p>

          <hr className="text-[#0000001A]" />
          {/* Select colors */}
          <div className="flex flex-col gap-2">
            <p className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px]">
              Select colors
            </p>
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-green-950 rounded-full"></div>
              <div className="w-7 h-7 bg-pink-400 rounded-full"></div>
              <div className="w-7 h-7 bg-amber-700 rounded-full"></div>
            </div>
          </div>
          <hr className="text-[#0000001A]" />

          {/* Choose size */}
          <div className="flex flex-col gap-2">
            <p className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px]">
              Choose size
            </p>
            <div className="flex gap-4 max-w-[420px]">
              <Button
                height="h-[39px] lg:h-[46px]"
                width="w-[74px] lg:w-[86px]"
                backgroundColor="gray"
                textcolor="gray"
                text={"Small"}
                border="softGray"
              />
              <Button
                height="h-[39px] lg:h-[46px]"
                width="w-[74px] lg:w-[86px]"
                backgroundColor="gray"
                textcolor="gray"
                text={"Medium"}
                border="softGray"
              />
              <Button
                height="h-[39px] lg:h-[46px]"
                width="w-[74px] lg:w-[86px]"
                backgroundColor="gray"
                textcolor="gray"
                text={"Large"}
                border="softGray"
              />
              <Button
                height="h-[39px] lg:h-[46px]"
                width="w-[74px] lg:w-[86px]"
                backgroundColor="gray"
                textcolor="gray"
                text={"X-Large"}
                border="softGray"
              />
            </div>
          </div>
          <hr className="text-[#0000001A]" />
          <div className="flex items-center gap-[12px] lg:gap-[20px] mb-[50px] lg:mb-[80px]">
            <Counter />
            <Button
              height="h-[44px] lg:h-[52px]"
              width="w-[236px] lg:w-[400px]"
              backgroundColor="black"
              textcolor="white"
              text={"Add to cart"}
              border="softGray"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs prop={product} />

      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductDetails;
