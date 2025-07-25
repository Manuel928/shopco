import { useProductImage } from "../components/ProductImageContext";

const ProductImageInView = () => {
  const { productImageInView } = useProductImage();

  return (
    <img
      src={productImageInView}
      className="object-cover w-full h-auto order-1 lg:order-2 rounded-xl"
      alt="Product View"
    />
  );
};

export default ProductImageInView;
