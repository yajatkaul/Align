import { useEffect, useState } from "react";

const useGetCart = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await fetch("/api/order/cart");

        const data = await res.json();
        if (data.err) {
          throw new Error(data.err);
        }
        setCart(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCart();
  }, []);

  return { cart };
};

export default useGetCart;
