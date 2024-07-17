import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-screen">
        <div className="flex bg-[#DFD3C3] h-[100px] md:justify-start justify-center items-center md:items-start">
          <Link to="/">
            <img src="/Logo.png" className="md:hidden h-[70px]" />
          </Link>
          <div className=" hidden md:flex flex-col">
            <Link to="/">
              <img src="/Logo.png" className="h-[80px] mt-[5px] ml-[10px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
