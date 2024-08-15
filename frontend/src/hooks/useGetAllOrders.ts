// @ts-nocheck
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllOrders = () => {
  const [orders, setOrders] = useState();
  const [page, setPage] = useState(1);
  const [hasFetched, setHasFetched] = useState({});
  const [hasMore, setHasMore] = useState(true);

  const limit = 2;

  useEffect(() => {
    const getAllOrders = async () => {
      if (!hasMore || hasFetched[page]) return;
      try {
        const res = await fetch(
          `/api/order/getOrders?page=${page}&limit=${limit}`
        );

        const data = await res.json();

        if (data.err) {
          throw new Error(data.err);
        }

        if (data.length < limit) {
          setHasMore(false);
        }

        setOrders((prevPosts) => {
          const validPrevPosts = Array.isArray(prevPosts) ? prevPosts : [];

          const newOrders = data.filter(
            (order) =>
              !validPrevPosts.some(
                (existingOrder) => existingOrder._id === order._id
              )
          );
          return [...validPrevPosts, ...newOrders];
        });
        setHasFetched((prev) => ({ ...prev, [page]: true }));
      } catch (err) {
        toast.error(err.message);
      }
    };

    getAllOrders();
  }, [page]);

  return { orders, setPage };
};

export default useGetAllOrders;
