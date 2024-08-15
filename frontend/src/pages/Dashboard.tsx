// @ts-nocheck
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import useGetAllOrders from "../hooks/useGetAllOrders";
import { FaPrint } from "react-icons/fa";
import { downloadCSV } from "../hooks/useGetCSV";
import { useEffect, useRef } from "react";

const Dashboard = () => {
  const { orders, setPage } = useGetAllOrders();
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef.current]);

  const print = () => {
    downloadCSV();
  };

  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div
          className="flex-1 mt-[100px] bg-cover bg-center bg-[url('/api/uploads/bg.jpg')] bg-fixed w-full overflow-x-hidden pr-[30px]"
          ref={containerRef}
        >
          {orders?.map((item) => (
            <OrderCard
              key={item._id}
              companyName={item.companyName}
              email={item.email}
              location={item.location}
              time={item.createdAt}
              phoneNumber={item.phoneNumber}
              data={item.items}
              type={item.type}
            />
          ))}
          <div className="fixed bottom-[40px] right-[50px]">
            <button onClick={print} className="btn">
              <FaPrint className="w-[40px] h-[40px]" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
