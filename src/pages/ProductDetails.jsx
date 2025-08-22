import Breadcrumb from "../components/Breadcrumb";
import Tabs from "../components/Tabs";
import RelatedProducts from "../components/RelatedProducts";
import LeftCoverImages from "../components/LeftCoverImages";
import ProductImageInView from "../components/ProductImageInView";
import ItemDetails from "../components/ItemDetails";
import { ProductProvider } from "../components/context/ProductContext";
import { useLoading } from "../components/context/LoadingSpinnerContext";

const ProductDetails = () => {
  const { isLoading } = useLoading();
  return (
    <ProductProvider>
      <div
        className="transition-opacity duration-300 max-w-[1440px] px-[16px] lg:px-[100px]"
        style={{ opacity: isLoading ? 0.5 : 1 }}
      >
        <Breadcrumb />

        <div className="flex flex-col mt-[36px] h-full lg:items-start lg:flex-row gap-y-[12px] gap-x-[40px]">
          {/* Left Covers */}
          <LeftCoverImages />

          {/* Selected Image */}
          {<ProductImageInView />}

          {/* Details */}
          <ItemDetails />
        </div>

        {/* Tabs */}
        <Tabs />

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </ProductProvider>
  );
};

export default ProductDetails;
