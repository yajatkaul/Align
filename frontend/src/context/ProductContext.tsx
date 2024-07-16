// @ts-nocheck
import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState(localStorage.getItem("context"));
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
