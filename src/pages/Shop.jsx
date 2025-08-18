import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/Cards/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";
import GlobalLoader from "../components/GlobalLoader";
import Button from "../components/Buttons/Button";
import { useLoading } from "../components/context/LoadingSpinnerContext";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState();
  const { isLoading, setIsLoading } = useLoading();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedShopItems = products?.slice(startIndex, endIndex);

  return (
    <>
      <section className="mb-[170px] max-w-[1440px] mx-auto flex flex-col items-center lg:pt-[72px] px-[16px] lg:px-[100px]">
        <Breadcrumb />
        <p className="font-IntegralCF font-bold text-[24px] mb-[25px] lg:mb-[55px] lg:text-[36px] text-center">
          Shop
        </p>

        <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4">
          {isLoading ? (
            <GlobalLoader />
          ) : (
            slicedShopItems?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center gap-[10px] justify-between">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex items-center font-satoshi font-semibold gap-[8px] px-4 py-1.5 rounded-[8px] bg-white border hover:bg-black/10 transition duration-200 disabled:opacity-50 focus:outline-none focus:ring-0"
          >
            <ArrowLeft />
            <span className="hidden md:flex">Previous</span>
          </button>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={products?.length}
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
                Math.min(prev + 1, Math.ceil(products?.length / pageSize))
              )
            }
            disabled={currentPage === Math.ceil(products?.length / pageSize)}
            className="flex items-center font-satoshi font-semibold gap-[8px] px-4 py-1.5 rounded-[8px] bg-white border hover:bg-black/10 transition duration-200 disabled:opacity-50 focus:outline-none focus:ring-0"
          >
            <span className="hidden md:flex">Next</span>
            <ArrowRight />
          </button>
        </div>
        {/* Pagination end */}
      </section>
    </>
  );
};

export default Shop;
