// @ts-nocheck
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import useGetAllOrders from "../hooks/useGetAllOrders";
import { FaPrint } from "react-icons/fa";

const Dashboard = () => {
  const { orders } = useGetAllOrders();
  const reversedArray = orders?.slice().reverse();
  const print = () => {
    window.print();
  };
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex-1 mt-[100px] bg-cover bg-center bg-[url('/bg.jpg')] bg-fixed w-full overflow-x-hidden pr-[30px]">
          {reversedArray?.map((item) => {
            return (
              <OrderCard
                companyName={item.companyName}
                email={item.email}
                location={item.location}
                time={item.createdAt}
                phoneNumber={item.phoneNumber}
                data={item.items}
                type={item.type}
              />
            );
          })}
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
