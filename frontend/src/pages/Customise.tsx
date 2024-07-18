// @ts-nocheck
import { CiShoppingCart } from "react-icons/ci";
import Header from "../components/Header";
import Product from "../components/Product";
import { useDataContext } from "../context/SendDataContext";
import { useCustomerContext } from "../context/CustomerContext";
import Footer from "../components/Footer";
import useGetProducts from "../hooks/useGetProducts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Customise = () => {
  const { details, setDetails } = useCustomerContext();
  const { data, setData } = useDataContext();

  const { product } = useGetProducts();
  const navigate = useNavigate();

  const handleTypeChange = (event: any) => {
    setDetails({ ...details, type: event.target.value });
  };

  const handleSumbit = async (e) => {
    event.preventDefault();

    toast.success(
      "Added to cart(I you didnt fill all the item details it wont be added)"
    );

    await submit();

    setDetails({
      companyName: "",
      phoneNumber: "",
      location: "",
      type: "",
    });

    navigate("/");
  };

  const submit = () => {
    setData(data + 1);
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-cover bg-center bg-[url('/bg.jpg')]">
        <Header />

        <div className="flex flex-1 mt-[100px] flex-wrap gap-8 justify-center pl-[10px] pr-[10px] mb-[20px] bg-cover bg-center bg-[url('/bg.jpg')]">
          {product?.map((item) => {
            return (
              <Product
                id={item._id}
                name={item.name}
                pic={item.image}
                type={item.type}
              />
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            className="btn fixed md:bottom-[20px] bottom-[30px] right-[20px] text-[20px] border-[#00000044] bg-[#ffffff]"
            onClick={handleSumbit}
          >
            <div className="flex items-center">
              <CiShoppingCart className="h-[40px] w-[40px]" />
              <p className="text-[20px]">Add to cart</p>
            </div>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Customise;
