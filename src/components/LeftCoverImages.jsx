import { useProduct } from "./context/ProductContext";
import ImageWithSkeleton from "./ImageWithSkeleton";

const LeftCoverImages = () => {
  const { product, setProductImageInView } = useProduct();

  return (
    <div className="order-2 lg:order-1 grid grid-cols-3 gap-x-[12px] gap-y-[14px] lg:flex lg:flex-col">
      {product?.images?.slice(0, 3).map((cover, index) => (
        // <img
        //   key={index}
        //   className="bg-softGray p-2 rounded-[2px] cursor-pointer hover:opacity-50 transition"
        //   src={cover}
        //   alt={`Cover ${index + 1}`}
        //   onClick={() => setProductImageInView(cover)}
        // />
        <ImageWithSkeleton
          key={index}
          className="bg-softGray p-2 rounded-[2px] cursor-pointer hover:opacity-50 transition"
          src={cover}
          alt={`Cover ${index + 1}`}
          onClick={() => setProductImageInView(cover)}
        />
      ))}
    </div>
  );
};

export default LeftCoverImages;
