import Card from "../components/Card";
import Header from "../components/Header";

const Requirement = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
        <Header />

        <div className="flex flex-1 mt-[90px] flex-wrap gap-8 justify-center">
          <Card name={"Swing Door"} pic={"/vite.svg"} />
          <Card name={"Swing Door"} pic={"Placeholder"} />
          <Card name={"Swing Door"} pic={"Placeholder"} />
          <Card name={"Swing Door"} pic={"Placeholder"} />
          <Card name={"Swing Door"} pic={"Placeholder"} />
          <Card name={"Swing Door"} pic={"Placeholder"} />
          <Card name={"Swing Door"} pic={"Placeholder"} />
        </div>

        <div className="w-full">
          <div className="flex bg-[#DFD3C3] h-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default Requirement;
