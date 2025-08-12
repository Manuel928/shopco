import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import { images } from "../../assets/assets";
import ProductCard from "../../components/Cards/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";
import ProductFilter from "../../components/productFilters/ProductFilter";
import { ArrowLeft, ArrowRight, ChevronDown, XIcon } from "lucide-react";
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
  const [sortOption, setSortOption] = useState("Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; // how many products per page

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const getCategory = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${baseUrl}/products/category/${category}`
      );
      console.log("all", response.data.products);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [sortOption, category]);

  // sorted products
  const sortedProducts = productCategory
    ? [...productCategory].sort((a, b) => {
        switch (sortOption) {
          case "popular":
            return "popular";
          case "priceLowToHigh":
            return a.price - b.price;
          case "priceHighToLow":
            return b.price - a.price;

          default:
            return 0;
        }
      })
    : [];
  console.log("sorted products", sortedProducts);

  // Paginated slice
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
      <div className="max-w-[1440px] mx-auto mb-[178px] px-4 lg:px-[100px]">
        <Breadcrumb />
        <div className="flex gap-[20px] pt-[24px]">
          <ProductFilter />
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex lg:grid lg:grid-cols-2 mb-[25px] gap-[8px] lg:gap-16 items-center justify-between">
                <h2 className="text-[18px] lg:text-[24px] font-satoshi font-bold">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>

                <div className="flex items-center gap-[7px] justify-between text-sm font-satoshi">
                  <p className="text-[#00000099]">
                    Showing 1-10 of 100 Products
                  </p>
                  <div className="text-[#00000099] gap-1 hidden lg:flex items-center justify-between">
                    <p>Sort by:</p>
                    <select
                      className="font-bold "
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      id=""
                    >
                      <option value="popular">Most Popular</option>
                      <option value="priceLowToHigh">
                        Price: Lowest to Highest
                      </option>
                      <option value="priceHighToLow">
                        Price: Highest to Lowest
                      </option>
                    </select>
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
            ) : currentProducts === null ? null : currentProducts?.length >
              0 ? (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <hr className="text-[#0000001A]" />

                {/* Pagination */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className="flex items-center font-satoshi font-semibold gap-[8px] px-4 py-1.5 rounded-[8px] bg-white border hover:bg-black/10 transition duration-200 disabled:opacity-50 focus:outline-none focus:ring-0"
                  >
                    <ArrowLeft />
                    <span>Previous</span>
                  </button>
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={sortedProducts.length}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                    className="flex items-center justify-between gap-4"
                    itemRender={(page, type) => {
                      if (type === "page") {
                        const isActive = page === currentPage;
                        return (
                          <button
                            className={`px-3 py-1 rounded font-satoshi focus:outline-none focus:ring-0 ${
                              isActive
                                ? "bg-[#0000000F] text-black"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            } outline-0`}
                          >
                            {page}
                          </button>
                        );
                      }
                    }}
                  />
                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(
                          prev + 1,
                          Math.ceil(sortedProducts.length / pageSize)
                        )
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(sortedProducts.length / pageSize)
                    }
                    className="flex items-center font-satoshi font-semibold gap-[8px] px-4 py-1.5 rounded-[8px] bg-white border hover:bg-black/10 transition duration-200 disabled:opacity-50 focus:outline-none focus:ring-0"
                  >
                    <span>Next</span>
                    <ArrowRight />
                  </button>
                </div>
                {/* Pagination end */}
              </>
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
