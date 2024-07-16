// @ts-nocheck
import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";

const useGetProducts = () => {
  const [product, setProduct] = useState(null);
  const { products } = useProductContext();

  useEffect(() => {
    const getCategories = async (products: any) => {
      try {
        const res = await fetch(`/api/order/product/${products}`);
        const data = await res.json();
        if (data.err) {
          throw new Error(data.err);
        }
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories(products);
  }, [products]);

  return { product };
};

export default useGetProducts;
