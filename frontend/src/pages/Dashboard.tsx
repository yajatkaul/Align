// @ts-nocheck
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import useGetAllOrders from "../hooks/useGetAllOrders";

const Dashboard = () => {
  const { orders } = useGetAllOrders();

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 mt-[100px]">
          {orders?.map((item) => {
            return (
              <OrderCard
                companyName={item.companyName}
                email={item.email}
                location={item.location}
                time={item.createdAt}
                phoneNumber={item.phoneNumber}
                data={item.items}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
