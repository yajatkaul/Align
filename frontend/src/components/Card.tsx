// @ts-nocheck
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

interface CardProps {
  name: string;
  pic: string;
}

const Card = ({ name, pic }: CardProps) => {
  const { products, setProducts } = useProductContext();

  const filteredPage = () => {
    setProducts(name);
    localStorage.setItem("context", name);
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-xl group hover:bg-[#ffffff23] hover:z-0 transition-opacity duration-300 ease-in-out w-full md:w-[300px]">
      <div className="max-w-[400px] h-[200px] overflow-hidden">
        <img
          src={`/api/uploads${pic}`}
          alt="image"
          className="w-full h-full object-scale-down transition-opacity duration-300 ease-in-out group-hover:opacity-80"
        />
      </div>

      <p className="text-[20px]">{name}</p>

      <Link to="/select" onClick={filteredPage}>
        <button className="btn btn-wide text-[20px]">Choose</button>
      </Link>
    </div>
  );
};

export default Card;
