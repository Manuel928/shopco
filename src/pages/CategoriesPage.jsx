import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { images, newArrivals, topSelling } from "../assets/assets";
import ProductCard from "../components/Cards/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilter from "../components/ProductFilter";

const CategoriesPage = () => {
  const { category } = useParams();
  const [productCategory, setProductCategory] = useState([]);

  const getCategory = async () => {
    const combinedProducts = [...topSelling, ...newArrivals];
    const foundCategories = combinedProducts.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    setProductCategory(foundCategories);
  };

  useEffect(() => {
    getCategory();
  }, [category]);

  return (
    <div className="max-w-[1440px] mx-auto mb-[178px] px-4 lg:px-[100px]">
      <Breadcrumb />
      <div className="flex gap-[20px] pt-[24px]">
        <ProductFilter/>
        <div className="flex flex-col">
          <h2 className="text-[18px] lg:text-[24px] font-satoshi font-bold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          {productCategory.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {productCategory.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
