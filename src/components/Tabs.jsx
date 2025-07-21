import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Product Details");

  const renderContent = () => {
    switch (activeTab) {
      case "Product Details":
        return <div>Product Details</div>;
      case "Rating & Reviews":
        return <div>Rating & Reviews</div>;
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
