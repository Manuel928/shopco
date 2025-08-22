import { useProduct } from "./context/ProductContext";
import ImageWithSkeleton from "./ImageWithSkeleton";

const ProductImageInView = () => {
  const { productImageInView } = useProduct();

  return (
    <img
      src={productImageInView}
      className="object-contain lg:w-[404px] lg:h-[530px] order-1 lg:order-2 rounded-xl"
      alt="Product View"
    />
    // <ImageWithSkeleton
    //   src={productImageInView}
    //   className="object-contain lg:w-[404px] lg:h-[530px] order-1 lg:order-2 rounded-xl"
    //   alt="Product View"
    // />
  );
};

export default ProductImageInView;
