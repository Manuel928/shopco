import { useProduct } from "../components/ProductContext";

const ProductImageInView = () => {
  const { productImageInView } = useProduct();

  return (
    <img
      src={productImageInView}
      className="object-cover w-full h-auto order-1 lg:order-2 rounded-xl"
      alt="Product View"
    />
  );
};

export default ProductImageInView;
