import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("/api/order/product/get");

        const data = await res.json();
        if (data.err) {
          throw new Error(data.err);
        }
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, []);

  return { products };
};

export default useGetProducts;
