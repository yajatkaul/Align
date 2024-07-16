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
  };

  return (
    <div className="flex flex-col hover:bg-slate-100/40 items-center mt-[30px]">
      <div className="w-[400px] h-[200px] overflow-hidden">
        <img
          src={pic}
          alt="image"
          className="w-full h-full object-scale-down"
        />
      </div>

      <p className="text-[20px]">{name}</p>

      <Link to="/select" onClick={filteredPage}>
        <button className="btn btn-wide">Choose</button>
      </Link>
    </div>
  );
};

export default Card;
