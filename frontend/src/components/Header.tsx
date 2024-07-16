const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-screen">
        <div className="flex bg-[#DFD3C3] h-[90px] md:justify-between justify-center items-center md:items-start">
          <a className="md:hidden text-[40px]">LOGO</a>
          <div className=" hidden md:flex flex-col">
            <a>SWING</a>
            <a>Choose Your design!</a>
          </div>
          <div className="flex flex-col">
            <a className="md:inline hidden">Logo</a>
            <a className="md:inline hidden mr-[25px]">Series By Mr. Glass</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
