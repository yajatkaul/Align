// @ts-nocheck
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useGetCategories from "../hooks/useGetCategories";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import useLogout from "../hooks/useLogout";
import toast from "react-hot-toast";

const Requirement = () => {
  const { categories } = useGetCategories();
  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-1 mt-[100px] flex-wrap gap-8 justify-center w-full bg-cover bg-center bg-[url('/bg.jpg')]">
          {categories?.map((category) => {
            return <Card name={category.name} pic={category.image} />;
          })}

          {authUser ? (
            <>
              <button
                onClick={handleLogout}
                className="btn fixed right-[20px] bottom-[100px] w-[50px] h-[50px] md:hidden"
              >
                <div>
                  <IoMdLogOut className="w-[40px] h-[40px]" />
                </div>
              </button>
              <Link to="/cart">
                <button className="btn fixed right-[20px] bottom-[30px] w-[50px] h-[50px] md:hidden">
                  <div>
                    <CiShoppingCart className="w-[50px] h-[50px]" />
                  </div>
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button className="btn fixed right-[20px] bottom-[30px] w-[50px] h-[50px] md:hidden">
                  <div>
                    <CiLogin className="w-[50px] h-[50px]" />
                  </div>
                </button>
              </Link>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Requirement;
