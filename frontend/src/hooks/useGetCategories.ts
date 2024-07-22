// @ts-nocheck
import { useEffect, useState } from "react";

const useGetCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "https://align-backend.onrender.com/api/order/category/get"
        );

        const data = await res.json();
        if (data.err) {
          throw new Error(data.err);
        }
        setCategories(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCategories();
  }, []);

  return { categories };
};

export default useGetCategories;
