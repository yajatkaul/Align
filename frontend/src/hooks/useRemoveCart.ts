// @ts-nocheck
import { useRef } from "react";

const useRemoveCart = () => {
  const removeCart = async ({ id }) => {
    try {
      const res = await fetch(`/api/order/cart/remove`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });

      const data = await res.json();
      if (data.err) {
        throw new Error(data.err);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return removeCart;
};

export default useRemoveCart;
