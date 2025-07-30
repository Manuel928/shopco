import { useEffect, useState } from "react";
import RatingAndReviews from "./RatingAndReviews";
import { useProduct } from "./ProductContext";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Product Details");
  const { product } = useProduct();

  // Reset active tab when product changes
  useEffect(() => {
    setActiveTab("Product Details");
  }, [product]);
  if (!product) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "Product Details":
        return <p className="font-satoshi">{product.productDetails}</p>;
      case "Rating & Reviews":
        return <RatingAndReviews />;
      case "FAQs":
        return <div>FAQs</div>;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Tab Buttons */}
      <div className="flex items-center justify-between lg:px-[140px] border-b font-satoshi">
        <button
          className={`${
            activeTab === "Product Details"
              ? "border-b-2 border-black"
              : "text-[#00000099]"
          }`}
          onClick={() => setActiveTab("Product Details")}
        >
          Product Details
        </button>
        <button
          className={`${
            activeTab === "Rating & Reviews"
              ? "border-b-2 border-black"
              : "text-[#00000099]"
          }`}
          onClick={() => setActiveTab("Rating & Reviews")}
        >
          Rating & Reviews
        </button>
        <button
          className={`${
            activeTab === "FAQs"
              ? "border-b-2 border-black"
              : "text-[#00000099]"
          }`}
          onClick={() => setActiveTab("FAQs")}
        >
          FAQs
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent()}</div>
    </>
  );
};

export default Tabs;
