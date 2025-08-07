import { useProduct } from "./context/ProductContext";

const ProductImageInView = () => {
  const { productImageInView } = useProduct();

  return (
    <img
      src={productImageInView}
      className="object-cover lg:w-[444px] lg:h-[530px] order-1 lg:order-2 rounded-xl"
      alt="Product View"
    />
  );
};

export default ProductImageInView;
