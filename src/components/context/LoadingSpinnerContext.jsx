import { createContext, useContext, useState } from "react";

const LoadingSpinnerContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingSpinnerContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingSpinnerContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingSpinnerContext);
