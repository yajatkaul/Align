// @ts-nocheck
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoLogIn } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";
import toast from "react-hot-toast";

const Header = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged Out");
  };
  return (
    <>
      <div className="fixed top-0 w-full z-20">
        <div className="flex bg-[#DFD3C3] h-[100px] md:justify-start justify-center items-center md:items-start">
          <Link to="/">
            <img src="/api/uploads/Logo.png" className="md:hidden h-[70px]" />
          </Link>
          <div className="hidden md:flex mt-[5px] w-full justify-between items-center">
            <Link to="/">
              <img
                src="/api/uploads/Logo.png"
                className="h-[80px] mt-[5px] ml-[10px]"
              />
            </Link>
            {!authUser ? (
              <>
                <Link to="/login">
                  <IoLogIn className="w-[50px] h-[50px] mr-[40px]" />
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <Link to="/cart">
                    <CiShoppingCart className="w-[50px] h-[50px]" />
                  </Link>
                  <CiLogout
                    onClick={handleLogout}
                    className="w-[40px] h-[40px] mr-[10px] cursor-pointer"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
