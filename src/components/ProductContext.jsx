import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { newArrivals, topSelling } from "../assets/assets";

// 1. Create context
const ProductContext = createContext();

// 2. Custom hook for convenience
export const useProduct = () => useContext(ProductContext);

// 3. Provider
export const ProductProvider = ({ children }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productImageInView, setProductImageInView] = useState(null);

  useEffect(() => {
    const combinedProducts = [...topSelling, ...newArrivals];
    const foundProduct = combinedProducts.find((product) => product._id === id);
    setProduct(foundProduct);
  }, [id]);

  useEffect(() => {
    if (product?.covers?.length) {
      setProductImageInView(product.covers[0]);
    }
  }, [product]);

  return (
    <ProductContext.Provider
      value={{ product, productImageInView, setProductImageInView }}
    >
      {children}
    </ProductContext.Provider>
  );
};
