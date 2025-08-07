import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import { images } from "../../assets/assets";
import ProductCard from "../../components/Cards/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import ProductFilter from "../../components/productFilters/ProductFilter";
import { ChevronDown, XIcon } from "lucide-react";
import ProductFilterMobile from "../../components/productFilters/ProductFilterMobile";
import axios from "axios";
import { useLoading } from "../../components/context/LoadingSpinnerContext";
import GlobalLoader from "../../components/GlobalLoader";

// Provider
const FilterContext = createContext();

// Consumer hook for convenience
export const useFilter = () => useContext(FilterContext);
const CategoriesPage = () => {
  const { category } = useParams();
  const [productCategory, setProductCategory] = useState(null);
  const [showMobileFilterOptions, setShowMobileFilterOptions] = useState(false);
  const { isLoading, setIsLoading } = useLoading();

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const getCategory = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${baseUrl}/products/category/${category}`
      );
      console.log(response.data.products);

      setProductCategory(response.data.products);
    } catch (error) {
      console.log("Could not load the categories", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="max-w-[1440px] mx-auto mb-[178px] px-4 lg:px-[100px]">
        <Breadcrumb />
        <div className="flex gap-[20px] pt-[24px]">
          <ProductFilter />
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex lg:grid lg:grid-cols-2 gap-[8px] lg:gap-16 items-center justify-between">
                <h2 className="text-[18px] lg:text-[24px] font-satoshi font-bold">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>

                <div className="flex items-center gap-[7px] justify-between text-sm font-satoshi">
                  <p className="text-[#00000099]">
                    Showing 1-10 of 100 Products
                  </p>
                  <div className="text-[#00000099] gap-1 hidden lg:flex items-center justify-between">
                    <p>Sort by:</p>
                    <strong>Most popular</strong>
                    <ChevronDown className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <img
                onClick={() => setShowMobileFilterOptions(true)}
                src={images.FilterIcon}
                className="rounded-[62px] lg:hidden object-cover"
                alt=""
                srcset=""
              />
            </div>
            {isLoading ? (
              <GlobalLoader />
            ) : productCategory === null ? null : productCategory.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {productCategory.map((product) => (
                  <ProductCard key={product.id} product={product} />
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

      {showMobileFilterOptions && (
        <>
          {/* Optional: semi-transparent background */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMobileFilterOptions(false)}
          />

          {/* Filter panel - does not cover navbar */}
          <div className="fixed left-0 right-0 top-[104px] bottom-0 bg-white px-[19px] shadow-2xl border flex flex-col rounded-tl-[20px] rounded-tr-[20px] z-50 overflow-y-auto">
            <div className="flex items-center justify-between py-4">
              <p className="font-bold font-satoshi">Filters</p>
              <XIcon
                className="cursor-pointer"
                onClick={() => setShowMobileFilterOptions(false)}
              />
            </div>

            {/* Insert your filters here */}
            <FilterContext.Provider
              value={{ showMobileFilterOptions, setShowMobileFilterOptions }}
            >
              <ProductFilterMobile />
            </FilterContext.Provider>
          </div>
        </>
      )}
    </>
  );
};

export default CategoriesPage;
