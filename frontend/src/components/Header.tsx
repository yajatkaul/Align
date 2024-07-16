const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-screen">
        <div className="flex bg-[#DFD3C3] h-[90px] md:justify-start justify-center items-center md:items-start">
          <a href="/">
            <img src="/Logo.png" className="md:hidden h-[70px]" />
          </a>
          <div className=" hidden md:flex flex-col">
            <a href="/">
              <img src="/Logo.png" className="h-[80px] mt-[5px] ml-[10px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
