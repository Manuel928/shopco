import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { newArrivals, topSelling } from "../../assets/assets";
import axios from "axios";
import { useLoading } from "./LoadingSpinnerContext";
import GlobalLoader from "../GlobalLoader";

// 1. Create context
const ProductContext = createContext();

// 2. Custom hook for convenience
export const useProduct = () => useContext(ProductContext);

// 3. Provider
export const ProductProvider = ({ children }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [productImageInView, setProductImageInView] = useState();
  const { isLoading, setIsLoading } = useLoading();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseUrl}/product/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("Failed to fetch product", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (product?.images?.length) {
      setProductImageInView(product.images[0]);
    }
  }, [product]);

  return (
    <ProductContext.Provider
      value={{ product, productImageInView, setProductImageInView }}
    >
      {isLoading ? <GlobalLoader /> : children}
    </ProductContext.Provider>
  );
};
