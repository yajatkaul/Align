// @ts-nocheck
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllOrders = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await fetch("/api/order/getOrders");

        const data = await res.json();

        if (data.err) {
          throw new Error(data.err);
        }

        setOrders(data);
      } catch (err) {
        toast.error(err.message);
      }
    };

    getAllOrders();
  }, []);

  return { orders };
};

export default useGetAllOrders;
