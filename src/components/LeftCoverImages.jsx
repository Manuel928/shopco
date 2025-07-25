import { useProductImage } from "../components/ProductImageContext";

const LeftCoverImages = () => {
  const { product, setProductImageInView } = useProductImage();

  return (
    <div className="order-2 lg:order-1 grid grid-cols-3 gap-x-[12px] gap-y-[14px] lg:flex lg:flex-col">
      {product?.covers?.map((cover, index) => (
        <img
          key={index}
          className="w-full cursor-pointer hover:opacity-80 transition"
          src={cover}
          alt={`Cover ${index + 1}`}
          onClick={() => setProductImageInView(cover)}
        />
      ))}
    </div>
  );
};

export default LeftCoverImages;
