import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import DetailCard from "./DetailCard";

interface ProductProps {
  name: string;
  pic: string;
  type: string;
}

const Product = ({ pic, name, type }: ProductProps) => {
  const [count, setCount] = useState(1);

  const add = () => {
    setCount(count + 1);
  };

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>Element {i + 1}</div>);
  }

  return (
    <div className="flex md:flex-row flex-col items-center w-full max-w-[800px]">
      <div className="flex items-center mt-[30px] gap-4">
        <div className="w-[250px] h-[200px] flex flex-col items-center">
          <img
            src={pic}
            alt="image"
            className="w-full h-full object-scale-down"
          />
          <a>{name}</a>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4">
            {elements.map(() => {
              return (
                <>
                  <DetailCard name={name} type={type} pic={pic} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <CiCirclePlus
        className="w-[50px] h-[50px] cursor-pointer mt-[30px]"
        onClick={add}
      />
    </div>
  );
};

export default Product;
