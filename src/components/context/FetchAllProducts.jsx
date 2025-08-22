import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useLoading } from "./LoadingSpinnerContext";

const FetchAllProductsContext = createContext();

export const useFetchAllProducts = () => useContext(FetchAllProductsContext);
export const FetchAllProducts = ({ children }) => {
  const { isLoading, setIsLoading } = useLoading();
  const [allProducts, setAllProducts] = useState();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const getAllProducts = async () => {
    try {
      setIsLoading(null);
      const response = await axios.get(`${baseUrl}/products`);
      //   console.log(response.data.products);

      setAllProducts(response.data.products);
    } catch (error) {
      console.log("Failed to fetch all products", error);
    } finally {
      setIsLoading(null);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <FetchAllProductsContext.Provider
      value={{ isLoading, setIsLoading, allProducts, setAllProducts }}
    >
      {children}
    </FetchAllProductsContext.Provider>
  );
};

export default FetchAllProducts;
