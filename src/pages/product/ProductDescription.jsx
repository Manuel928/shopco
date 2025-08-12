import React from "react";
import { useProduct } from "../../components/context/ProductContext";

const ProductDescription = () => {
  const { product } = useProduct();
  return (
    <div className="flex flex-col space-y-[30px] font-satoshi">
      <div className="space-y-2">
        <h4 className="font-medium text-[16px]">Description:</h4>
        <p>{product.description}</p>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-[16px]">Tags:</h4>
        <p>{product.tags.join(", ")}</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-medium text-[16px]">Specifications:</h4>
        <ul className="list-disc pl-4">
          <li>SKU: {product.sku}</li>
          <li>Weight: {product.weight}kg</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
