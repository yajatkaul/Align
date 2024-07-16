// @ts-nocheck
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useGetCategories from "../hooks/useGetCategories";

const Requirement = () => {
  const { categories } = useGetCategories();

  return (
    <>
      <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
        <Header />

        <div className="flex flex-1 mt-[100px] flex-wrap gap-8 justify-center">
          {categories?.map((category) => {
            return <Card name={category.name} pic={category.image} />;
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Requirement;
